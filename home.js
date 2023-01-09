$(document).ready(function(){

    // jquery寫法
    $(".a-title").click(function(){

    $(this).next(".p-text").toggleClass("active");
    
   
    });



    // js寫法

    // var acc = document.getElementsByClassName("a-title");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
       
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none";
    //     } else {
    //       panel.style.display = "block";
    //     }
    //   });
    // }






    // 手機側邊選單 
    $(".sidebar-open").click(function(){
      $(".mb-sidebar").fadeToggle("open");
    })

    $(".x-icon").click(function(){
      $(".mb-sidebar").fadeToggle("open");
    })

    // 手機footer
   $(".mb-footer-title").click(function(){
    $(this).next(".mb-footerbox").toggleClass("mb-open");
   })

   $(".mb-footer-title").click(function(){
    
    // $(this).next("mb-footer-link").toggleClass("mb-open");
    // $(this).next("mb-footer-link").addClass("mb-open");
    $(this).next(".mb-f-link").toggleClass("mb-open");
    $(this).toggleClass("turn");
   })



  });
  