$(function(){

//MAIN1 zwijane opisy zdjęć

var main1Panel = $(".main1__container__panel");
console.log(main1Panel);

main1Panel.each(function(){
  $(this).parent().on("mouseover", function(){
    $(this).children().slideUp(500);
  });
});

main1Panel.each(function(){
  $(this).parent().on("mouseleave", function(){
    $(this).children().slideDown(500);
  });
});

});
