const dropArea = document.querySelector(".drag-area");
const dragText = dropArea.querySelector("header");
const button = dropArea.querySelector("button"); 
const input = dropArea.querySelector("input");  

let file;

button.onclick = ()=>{
    input.click();   //當按鈕被點擊時input也被點擊了
}


input.addEventListener("change",function(){
    file = this.files[0];
    showFile();
});



// 檔案移入虛線內
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    // console.log("file is over drogarea");
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
})


// 檔案移除虛線外
dropArea.addEventListener("dragleave", ()=>{
    // console.log("file is outside form drogarea");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
})

dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //若要使用 drop 須取消預設行為，使用語法 event.preventDefault()
    // console.log("file is dropoed on droparea");
   file = event.dataTransfer.files[0];
    showFile();
})

function showFile(){
    let fileType = file.type;
  

    let validExtensions = ["image/png","image/jpg","image/jpeg"];
    if(validExtensions.includes(fileType)){
     let fileReader = new FileReader();
     fileReader.onload = ()=>{
         let fileURL = fileReader.result;
         // console.log("fileURL");
         let imgTag = `<img src="${fileURL}" alt="">`;
 
         dropArea.innerHTML = imgTag;
     }
     fileReader.readAsDataURL(file);
     //  console.log("This is an Image File");
    }else{
     alert("This is not an Image File");
     //  console.log("This is not an Image File");
    }
}