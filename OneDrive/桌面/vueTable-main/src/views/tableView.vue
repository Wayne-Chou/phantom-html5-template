<template>
    <div :class="{ close: isActive }" class="sidebar">
        <div @click="toggleClass" class="bar"><i class="fa-solid fa-bars"></i></div>
        <div class="item"><i class="fa-solid fa-book"></i>
            <div class="text">系統一</div>
        </div>
        <div class="item"><i class="fa-solid fa-book"></i>
            <div class="text">系統二</div>
        </div>
        <div class="item"><i class="fa-solid fa-book"></i>
            <div class="text">系統三</div>
        </div>

    </div>


    <div :class="{ close: isActive }" class="content">
        <div class="top"><img id="nvlg" class="nav_logo" src="https://www.yoyorock.com/images/logo_rockmobile.png"
                title="滾石移動 Rock Mobile"></div>
        <div class="inputbox">
            <div class="input-text">訊息表格</div>
            <div class="input-btn">
                <input v-model="inputContent" class="form-control" placeholder="輸入內容">
                <button class="btn" @click="addItem">新增</button>
            </div>

        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>内容</th>
                        <th>新增时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>

                            <span v-if="!item.editing">{{ item.content }}</span>
                            <input v-else v-model="editInputContent" class="form-control" placeholder="修改内容">
                        </td>
                        <td>{{ formatDate(item.timestamp) }}</td>

                        <td>
                            <span v-if="!item.editing" @click="editItem(index)" class="text-primary"
                                style="cursor: pointer;">
                                <i class="fas fa-edit"></i>
                            </span>
                            <span v-else @click="addItem" class="text-success" style="cursor: pointer;">
                                <i class="fas fa-save"></i>
                            </span>
                            <span @click="deleteItem(index)" class="text-danger " style="cursor: pointer;">
                                <i class="fas fa-trash-alt"></i>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            inputContent: '',//文字輸入一開始為空
            editInputContent: '', // 用於編輯時的內容
            items: [],//用陣列的方式來放輸入的內容,並使用v-for呈現
            editingIndex: -1,//使用布林值未輸入為-1
            isActive: false//class添加
        };
    },
    methods: {

        addItem() {
            // 檢查是否不為空
            if (this.editInputContent.trim() !== '') {
                // editingIndex為-1表示要添加內容
                if (this.editingIndex === -1) {
                    // 將內容添加到items陣列中
                    this.items.push({
                        content: this.editInputContent,
                        timestamp: new Date(),
                        editing: false,
                    });
                } else {
                    // 如果editingIndex不為-1表示在編輯
                    this.items[this.editingIndex].content = this.editInputContent;
                    // 在更新內容將editing設為false
                    this.items[this.editingIndex].editing = false;
                    // 再將 editingIndex改為-1
                    this.editingIndex = -1;

                }
            } else {
                // 檢查是否不為空
                if (this.inputContent.trim() !== '') {
                    // 將內容添加到items陣列中
                    this.items.push({
                        content: this.inputContent,
                        timestamp: new Date(),
                        editing: false,
                    });
                    // 最後清空輸入內容
                    this.inputContent = '';
                }
            }
        },
        editItem(index) {
            // 將 editingIndex 設置為指定的索引index，表示正在編輯這個項目
            this.editingIndex = index;
            // 將 inputContent 設置為指定索引的項目的內容，以在編輯時顯示當前內容
            this.editInputContent = this.items[index].content;
            // 將指定索引的項目的 editing 屬性設置為 true，表示處於編輯模式
            this.items[index].editing = true;
        },
        // 點擊時使用splice移除index代表位置,1為長度
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        formatDate(date) {
            // 寫法參考資料https://w3c.hexschool.com/blog/e69d8619
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            // 第1個參數undefined表示JavaScript 將自動採用執行程式碼的瀏覽器或系統的時區。這樣能夠確保顯示的日期時間是以用戶所在地區的時區為基準的。
            return new Date(date).toLocaleDateString(undefined, options);
        },

        // class樣式開關
        toggleClass() {
            this.isActive = !this.isActive;
        }
    },
};
</script>
  
<style scoped>
.sidebar {
    position: fixed;
    height: 100%;
    width: 300px;
    background: #3A3A3A;
    transition: all .4s;
}

.content {
    position: relative;
    min-height: 100vh;
    left: 300px;
    width: calc(100% - 300px);
    padding: 15px;
    transition: all .4s;
}

.bar {
    text-align: left;
    padding: 15px 20px;

}

.bar i {
    font-size: 35px;
    cursor: pointer;
    color: #fff;
}

.item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    overflow: hidden;
    white-space: nowrap;
}

.item i {
    font-size: 30px;
    color: #fff;
    padding-right: 20px;
}

.item .text {
    font-size: 30px;
    color: #fff;
}

/* sidebar 開闔*/
.sidebar.close {
    width: 68px;
}

.content.close {
    left: 68px;
    width: calc(100% - 68px);
}

.content.close .top {
    left: 68px;
    width: calc(100% - 68px);
}

/* 右邊內容 */
.top {
    position: fixed;
    top: 0;
    left: 300px;
    width: calc(100% - 300px);
    background: #fff;
    transition: all .4s;
}

.inputbox {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}

.input-text {
    font-size: 30px;
    padding-left: 30px;
}

.form-control {
    width: 300px;
    height: 30px;
    border-radius: 6px;
}

.btn {
    margin-left: 30px;
    background: #3A3A3A;
    color: #fff;
    padding: 5px 35px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
}





/* table樣式 */

.table {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    margin-top: 50px;
    border: 1px solid #DADADA;
}

table {
    border-collapse: collapse;
    width: 100%;

}



th {
    color: #fff;
    background: #3A3A3A;
    padding: 8px;
    text-align: left;
}

th:first-child {
    width: 60%;
}

td {
    border: 1px solid;

    padding: 8px;

}

td:first-child,
td:nth-child(2) {
    border-right: none;
}

td:nth-child(2) {
    border-left: none;
}

td:nth-child(3) {
    border-left: none;
}


.text-primary i,
.text-success i,
.text-danger i {
    font-size: 20px;

}

.text-success i,
.text-primary i {
    margin-right: 15px;
}
</style>
