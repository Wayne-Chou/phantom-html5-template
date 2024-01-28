// 選取DOM
const openShopping = document.querySelector(".shopping"),
  closeShopping = document.querySelector(".closeShopping"),
  body = document.querySelector("body"),
  list = document.querySelector(".list"),
  listCard = document.querySelector(".listCard"),
  total = document.querySelector(".total"),
  quantity = document.querySelector(".quantity");

// 監聽按鈕開啟
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
// 監聽按鈕關閉
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// 商品資料
let products = [
  {
    id: 1,
    name: "PRODUCT 1",
    image: "1.png",
    price: 2000,
  },
  {
    id: 2,
    name: "PRODUCT 2",
    image: "2.png",
    price: 2200,
  },
  {
    id: 3,
    name: "PRODUCT 3",
    image: "3.png",
    price: 2400,
  },
  {
    id: 4,
    name: "PRODUCT 4",
    image: "4.png",
    price: 2600,
  },
  {
    id: 5,
    name: "PRODUCT 5",
    image: "5.png",
    price: 1400,
  },
  {
    id: 6,
    name: "PRODUCT 6",
    image: "6.png",
    price: 1800,
  },
];

// 購物車資料一開始為空
let listCards = [];

// 商品一開始載入
const initApp = () => {
  // 用forEach迭代
  products.forEach((value, key) => {
    // 在html上創建1個div
    let newDiv = document.createElement("div");
    // 加入item class給div
    newDiv.classList.add("item");
    // 將html結構寫出
    newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Add To Card</button>
        `;
    // 將商品資訊加入html
    list.appendChild(newDiv);
  });
};
// 畫面開啟時載入商品
initApp();

// 加入購物車
const addToCard = (key) => {
  // 檢查是否商品是否存在
  if (listCards[key] == null) {
    // 不存在將商品加入
    //[JavaScript] JSON stringify and parse網址: https://oawan.me/2016/javascript-json-stringify-and-parse/
    // 深拷貝淺拷貝差異網址:https://ithelp.ithome.com.tw/articles/10223178
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    // 數量為1
    listCards[key].quantity = 1;
  } else {
    // 如果已經存在數量加1
    listCards[key].quantity += 1;
  }
  // 在重新更新畫面
  reloadCard();
};

// 購物車介面
const reloadCard = () => {
  // 清空購物車畫面
  listCard.innerHTML = "";
  // 一開始數量為0
  let count = 0;
  // 一開始金額為0
  let totalPrice = 0;
  // 迭代購物車的所有商品
  listCards.forEach((value, key) => {
    // 如果不為空計算價格
    if (value != null) {
      // 商品總金額=商品金額乘商品數量
      let itemTotalPrice = value.price * value.quantity;
      // 最後更新總金額
      totalPrice += itemTotalPrice;
      // 更新商品數量
      count += value.quantity;
      // 將html結構寫出
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="img/${value.image}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${itemTotalPrice.toLocaleString()}</div>
                <div>
                    <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>
            `;
      // 將購物車資訊加入購物車列表
      listCard.appendChild(newDiv);
    }
  });
  // 更新總金額
  //toLocaleString,網址參考https://www.fooish.com/javascript/number/toLocaleString.html
  total.innerText = totalPrice.toLocaleString();
  // 更新總數量
  quantity.innerText = count;

  // 如果購物車為空金額為0
  if (listCards.length === 0) {
    total.innerText = "0";
  }
};

// 更改購物車的商品數量
const changeQuantity = (key, newQuantity) => {
  // 如果數量小於等於0,將購物車商品刪除使用js delete
  if (newQuantity <= 0) {
    delete listCards[key];
    // 否則更新商品數量
  } else {
    listCards[key].quantity = newQuantity;
  }

  // 重新再計算商品金額
  let totalPrice = 0;
  // 迭代商品
  listCards.forEach((item) => {
    // 如果不為空總金額等於數量乘上金額
    if (item !== null) {
      totalPrice += item.quantity * products[key].price;
    }
  });

  // 更新總金額跟數量
  //toLocaleString,網址參考https://www.fooish.com/javascript/number/toLocaleString.html
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = calculateTotalQuantity();
  // 重新更新畫面
  reloadCard();
};

// 計算購物車所有商品的數量
const calculateTotalQuantity = () => {
  // 一開始為0
  let totalQuantity = 0;
  // 迭代所有商品
  listCards.forEach((value) => {
    // 如果不為空
    if (value !== null) {
      // 將每個數量加到總數量
      totalQuantity += value.quantity;
    }
  });
  // 最後回傳總數量
  return totalQuantity;
};
