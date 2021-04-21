$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //typing animation

    var typed = new Typed(".typing",{
        strings: ["Student","programmer","scubadiver","cyclist","surfer","artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Student","programmer","scubadiver","cyclist","surfer","artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    
    //slide up jscript
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    //for toggling menu or navbar javascript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn is').toggleClass("active");
    });
});