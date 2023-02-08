const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebarToggle = body.querySelector(".sidebar-toggle");
const sidebar = body.querySelector("nav");
// const linkName = body.querySelector(".link-name");


modeToggle.addEventListener("click",()=>{
    body.classList.toggle("dark");
    // if(body.classList.contains("dark")){
    //     linkName.innerText = "Sun mode";
        
    // }else{
    //     linkName.innerText = "Dark mode";
    // }
    

});



sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
});


