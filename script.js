$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY  > 20){
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


    // slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    var typed = new Typed(".typing", {
        strings: ["Designer","Developer","Avid Learner","Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: true,
        // autoplayTimeOut: 2000,
        // autooplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }

        }
    });



});
