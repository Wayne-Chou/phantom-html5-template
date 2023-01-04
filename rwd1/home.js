$(document).ready(function(){
    $(".a-title").click(function(){

    $(this).next(".p-text").toggleClass("active");
    
    // $(".p-text").toggleClass("active");
    });




    // $(".sidebar-open").click(function(){
    //   $(".mb-sidebar").addClass("open");
    // })

    // $(".x-icon").click(function(){
    //   $(".mb-sidebar").removeClass("open");
    // })




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