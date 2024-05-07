// 旋轉木馬

let tree = document.querySelector(".carousel-item-tree");
let CarouselMonster = document.querySelector(".carousel-item-monster");
let CarouselMonsterSpeek = document.querySelector(".carousel-item-speek");


tree.addEventListener("click",()=>{
    CarouselMonster.classList.toggle("active");
    CarouselMonsterSpeek.classList.toggle("active");
})



// 馬戲團

let EntertainmentMonster =document.querySelector(".entertainment-monster");
let EntertainmentMonsterSpeek =document.querySelector(".entertainment-monster-speek");


EntertainmentMonster.addEventListener("click",()=>{
   EntertainmentMonsterSpeek.classList.toggle("active");
})



// 火車

let TrainMonster =document.querySelector(".train-monster");
let TrainMonsterSpeek =document.querySelector(".train-monster-speek");

TrainMonster.addEventListener("click",()=>{
   TrainMonsterSpeek.classList.toggle("active");
})


// 摩天輪
let FerrisWheelMonster =document.querySelector(".FerrisWheel-monster");
let FerrisWheelMonsterSpeek=document.querySelector(".FerrisWheel-monster-speek");

FerrisWheelMonster.addEventListener("click",()=>{
   FerrisWheelMonsterSpeek.classList.toggle("active");
})



// 城堡
let CastleMonster =document.querySelector(".castle-monster");

CastleMonster.addEventListener("click",()=>{
   CastleMonster.classList.toggle("active");
})