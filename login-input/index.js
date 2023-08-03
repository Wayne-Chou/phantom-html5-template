const form = document.querySelector("form");
const typelist = form.querySelector(".typelist");
const nameTit = form.querySelector(".name");
const phone= form.querySelector(".phone");
const amount = form.querySelector(".amount");
const payment = form.querySelector(".payment");
const listText = form.querySelector(".list-text");
const nameText =form.querySelector(".name-text");
const phoneText = form.querySelector(".phone-text");
const amoutText = form.querySelector(".amout-text");
const paymentText = form.querySelector(".payment-text");

const btnText = document.querySelector(".form-btn .btn-text");

const btn = document.querySelector(".form-btn");


function list(){
   var value = form.querySelector('.typelist').value;
    if (value === "") {
        typelist.classList.add("invalid");
        listText.innerText="必填";
    }
   
}



// else if(!value === "store1" || "store2" || "store3"){
//     typelist.classList.add("invalid");
//     listText.innerText="請填選項內的值";
// }

function nameTitle(){
    
    var val = form.querySelector(".name").value;
    if(val === "" || val===/[^a-zA-Z\u4e00-\u9fa5]/g){
        nameTit.classList.add("invalid");
        // alert('Please enter a valid');
        nameText.innerText="請輸入完整的名字";
    }
    
}


function phoneNumber(){
    
    var val = form.querySelector(".phone").value;
    if(val === ""){
        phone.classList.add("invalid");
        // alert('Please enter a valid');
        phoneText.innerText="請輸入手機號碼";
    }
  
}

function Amount(){
    
    var val = form.querySelector(".amount").value;
    if(val === ""){
        amount.classList.add("invalid");
        
        amoutText.innerText="必填";
    }else if(val <= 0){
        amount.classList.add("invalid");
        amoutText.innerText="不能小於0";
    }
  
}



function Payment(){
    
    var val = form.querySelector(".payment").value;
    if(val === ""){
        payment.classList.add("invalid");
        
        paymentText.innerText="必填";
    }
    
}






btn.addEventListener("click",(e)=>{
    e.preventDefault();
    btn.classList.add("checked");
    btnText.textContent = "success";
    list();
    nameTitle();
    phoneNumber();
    Amount();
    Payment();
})





