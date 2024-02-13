const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

//參考網址
//  https://ithelp.ithome.com.tw/articles/10280913

items.forEach((item) => {
  // dragstart：拖拉時在被拖拉的節點上觸發，事件的 target 指向被拖拉的節點
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
    // item.classList.add("dragging");
  });
  // dragend：拖拉結束時（鬆開滑鼠或按下 escape 鍵），在被拖拉的節點上觸發，事件的 target 是被拖拉的節點，與 dragstart 在同一個節點上觸發。
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  // 阻止預設行為
  e.preventDefault();
  // 目前正在拖動的
  const draggingItem = document.querySelector(".dragging");
  // 沒有dragging的item
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // clientY網址
  // https://www.runoob.com/jsref/event-clienty.html

  let nextSibling = siblings.find((sibling) => {
    // 滑鼠移動到item跟item中間
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  // 使用insertBefore將item移動到你要的位置
  // insertBefore網址
  // https://www.w3school.com.cn/jsref/met_node_insertbefore.asp
  sortableList.insertBefore(draggingItem, nextSibling);
};

// dragover：拖拉到當前節點時，在當前節點持續觸發，事件的 target 為當前節點。
sortableList.addEventListener("dragover", initSortableList);
// dragenter：拖拉進當前節點時，在當前節點上觸發，事件的 target 指向當前節點。
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
