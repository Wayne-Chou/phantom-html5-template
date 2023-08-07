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


    document.querySelector('.list-text').innerText = "";
    document.querySelector('.name-text').innerText = "";
    document.querySelector('.phone-text').innerText = "";
    document.querySelector('.amout-text').innerText = "";
    document.querySelector('.payment-text').innerText = "";
    document.querySelectorAll(".invalid").forEach((e) => {
        e.classList.remove("invalid")
    })

    let validOptions = Array.from(document.getElementById('typelist').options).map(option => option.value);
    if (typelistInput.value === "") {
        typelistInput.classList.add("invalid");
        listText.innerText = "必填";
    } else if (!validOptions.includes(typelistInput.value)) {
        listText.innerText = "填選選單的值";

    }

    let name = /^[A-Za-z\u4e00-\u9fa5\s]+$/;
    if (nameInput.value === "") {
        nameInput.classList.add("invalid");
        nameText.innerText = "必填";
    } else if (!name.test(nameInput.value)) {
        nameText.innerText = "請輸入中英文";
    }


    let phone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (phoneInput.value === "") {
        phoneInput.classList.add("invalid");
        phoneText.innerText = "必填";
    } else if (!phone.test(phone.value)) {
        phoneText.innerText = "只能填寫手機號碼";
    }

    let amount = /^[0-9]+$/;
    if (amountInput.value === "") {
        amountInput.classList.add("invalid");
        amoutText.innerText = "必填";
    } else if (!amount.test(amountInput.value) || Number(amountInput.value) < 0) {
        amoutText.innerText = "必須是大於等於0的數字";
    }

    if (paymentInput.value === "") {
        paymentInput.classList.add("invalid");
        paymentText.innerText = "必填";
    }


}
