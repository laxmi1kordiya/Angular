$(document).ready(function(){
var scrolllink =$('.scroll');

scrolllink.click(function(e){
 e.preventdefault();
 $('body,html').animate({
     scrolltop: $(this.hash).offset().top
 },1000);   
});

// active link
$(window).scroll(function(){
    var scrollbarlocation = $(this).scrolltop();

    scrolllink.each(function(){
        var sectionoffset =$(this.hash).offset().top -20;

        if(sectionoffset <= scrollbarlocation){
            $(this).parent().addclass('active');
            $(this).parent().sibiling().removeclass('active')
        }
    });
});
});
