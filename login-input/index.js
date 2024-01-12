
// 以下為各個輸入框錯誤時會出現的警告
let listText = document.querySelector(".list-text");
let nameText = document.querySelector(".name-text");
let phoneText = document.querySelector(".phone-text");
let amoutText = document.querySelector(".amout-text");
let paymentText = document.querySelector(".payment-text");




document.querySelector('.form-btn').addEventListener('click', function () {
    validateForm();
});

function validateForm() {
    let typelistInput = document.querySelector('.typelist');
    let nameInput = document.querySelector('.name');
    let phoneInput = document.querySelector('.phone');
    let amountInput = document.querySelector('.amount');
    let paymentInput = document.querySelector('.payment');

    // 每次點擊按鈕後會先清除警告再去驗證是否正確
    document.querySelector('.list-text').innerText = "";
    document.querySelector('.name-text').innerText = "";
    document.querySelector('.phone-text').innerText = "";
    document.querySelector('.amout-text').innerText = "";
    document.querySelector('.payment-text').innerText = "";
    document.querySelectorAll(".invalid").forEach((e) => {
        e.classList.remove("invalid")
    })

    // 設定一個變數假設驗證通過
    let allValue = true;

    let validOptions = Array.from(document.getElementById('typelist').options).map(option => option.value);
    if (typelistInput.value === "") {
        typelistInput.classList.add("invalid");
        listText.innerText = "必填";
    } else if (!validOptions.includes(typelistInput.value)) {
        listText.innerText = "填選選單的值";
        allValue = false;  //驗證一開始皆為沒通過
    }


    // /^[A-Za-z\u4e00-\u9fa5\s]+$/為正則表達式只能輸入中英文
    let name = /^[A-Za-z\u4e00-\u9fa5\s]+$/;
    if (nameInput.value === "") {
        nameInput.classList.add("invalid");
        nameText.innerText = "必填";
    } else if (!name.test(nameInput.value)) {
        nameText.innerText = "請輸入中英文";
        allValue = false;//驗證一開始皆為沒通過
    }


    // /^[0-9]{10}$/為正則表達式只能輸入10位數
    let phone = /^[0-9]{10}$/;
    if (phoneInput.value === "") {
        phoneInput.classList.add("invalid");
        phoneText.innerText = "必填";
    } else if (!phone.test(phoneInput.value)) {
        phoneText.innerText = "只能填寫手機號碼";
        allValue = false;//驗證一開始皆為沒通過
    }
    // /^[0-9]+$/為正則表達式只能數字
    let amount = /^[0-9]+$/;
    if (amountInput.value === "") {
        amountInput.classList.add("invalid");
        amoutText.innerText = "必填";
    } else if (!amount.test(amountInput.value) || Number(amountInput.value) < 0) {
        amoutText.innerText = "必須是大於等於0的數字";
        allValue = false;//驗證一開始皆為沒通過
    }

    if (paymentInput.value === "") {
        paymentInput.classList.add("invalid");
        paymentText.innerText = "必填";
        allValue = false;//驗證一開始皆為沒通過
    }


    // 如果都通過了顯示成功樣式，沒通過顯示失敗樣式
    if (allValue) {
        updateButton(true);
    } else {
        updateButton(false);
    }


}


// 按鈕樣式更新使用success參數帶入判斷成功或式失敗樣式
function updateButton(success) {
    let xIcon = document.querySelector(".x-icon");
    let icon = document.querySelector(".check-icon");
    let btnText = document.querySelector(".btn-text");

    // 使用success參數判斷並加入按鈕樣式
    if (success) {
        icon.classList.add("success");
        xIcon.classList.remove("error");
        btnText.classList.add("success");
        btnText.classList.remove("error");
        btnText.innerText = "success";
    } else {
        xIcon.classList.add("error");
        btnText.classList.add("error");
        btnText.classList.remove("success");
        icon.classList.remove("success");
        btnText.innerText = "fail";
    }

}
