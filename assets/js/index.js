
    //gnb
    $('.gnb .nav-item').hover(function(){
        if($(this).find('.sub-list').length){
            //내가 마우스 올린 sub-list(자식)의 길이가 있다면(=true면 1 // false = 0)
            $('.header').addClass('on');
            $(this).find('.sub-list').addClass('on')
        }
    },function(){
        $('.header').removeClass('on')
        $(this).find('.sub-list').removeClass('on')
    })

    function firstChk(){
        $('.gnb .sub-item:first-child').addClass('on').siblings().removeClass('on')
    }
    firstChk();
    //초기세팅으로 한번 실행시킴

    $('.gnb .sub-item').hover(function(){
        $(this).addClass('on').siblings().removeClass('on')
    },function(){
        firstChk();
    })
    
    // 타이핑효과

    // gsap.to(
    //     repeat:1,

    // )
    // var repeat = gsap.timeline({
    //     repeat:1
    // })
    

    // var tl = gsap.timeline({
    //     repeat:1
    // });

    // // stagger - 차례로 애니메이션 실행해줌
    // tl.to('.menu .group-menu-gnb .emoji i',{
    //     x:-300,
    //     duration:1,
    //     stageer:0.4,
    // })
    // tl.from('.menu .group-menu-gnb .emoji i',{
    //     y:300,
    //     duration:1,
    //     stageer:0.4,
    // })
    
    gsap.to('.menu .group-menu-gnb .emoji i',{
        yoyo:true,
        repeat:1,
        stagger:{
            amount:0.4
        }
    })





    $('.lang-area button').click(function(){
        $('.lang-area button').prop('disabled', false);
        // prop은 html을 설정하는 매서드
        $(this).prop('disabled', true);
    })

    $('.nf-lang button').click(function(){
        $('.nf-lang button').prop('disabled', false);
        // prop은 html을 설정하는 매서드
        $(this).prop('disabled', true);
    })



    $('.btn-catecory').click(function(){
        $('.menu').addClass('on')
        $('.menu-dimmed').addClass('')
        $('.menu-inner').removeClass('fade')

        if($('.wrapper').hasClass('notscroll')){
            $(this).addClass('.menu-dimmed')
        }else{
            $(this).removeClass('.menu-dimmed')
            
        }
    })
    $('.close').click(function(){
        $('.menu').removeClass('on')
        $('.menu-inner').addClass('fade')
    })

    $('.menu-main').click(function(){
        $(this).siblings('.menu-sub').toggleClass('show')
    })






    // 스크롤

    let lastScroll = 0;

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        here = $('.sc-service').offset().top
        

        if(curr>=here){
            //현재값이 내가 설정한 값(sc-service)보다 클때 --기준
            if(curr>lastScroll){
                //현재값이 마지막스크롤값보다 클때, (1차셋팅)
                $('.header').addClass('hide')
            }else{
                $('.header').removeClass('hide')
            }
        }else{
            $('.header').removeClass('hide')
        }

        lastScroll = curr;

    })

    // 슬라이더
    var swiper = new Swiper(".main-slide",{
        autoplay:{
            delay:3000,
            disableOnInteraction:false
        },
        loop:true,
        pagination:{
            el:".pagination",
            clickable:true,
        }
    })

    var storyslide = new Swiper(".sc-workstory .group-content",{
        freeMode:true,
        speed:3000,
        slidesPerView:'auto',
        spaceBetween:15,
        autoplay:{
            delay:0,
            disableOnInteraction:false
        },
        // touchRatio:0,손컨트롤안됨
        loop:true
    })
    $('.sc-workstory .group-content').hover(function(){
        storyslide.autoplay.stop();
    },function(){
        storyslide.autoplay.start();
    })



    // 비디오
    $('.btn-play').click(function(){

        videoEl = $('.sc-service video').get(0);
        // 비디오에 접근하는 문법

        if($('.control-playbtn').hasClass('on')){
            videoEl.currentTime = 0;
            // 처음부터 실행
            videoEl.play();
        }else{
            videoEl.pause();
        }
        $('.control-playbtn').toggleClass('on')
    })


    //sc-news

    $('.group-news li').hover(
        function(){
            $(this).css({backgroundColor:'#f9f9fa'})
        },function(){
            $(this).css({backgroundColor:'#fff'})
    })


    //footer

    $('.footer-relate button').click(function(){
        
        let ul = $(this).siblings('ul')

        $('.btn-open').toggleClass('active')
        ul.toggleClass('active')
        
    })

    //dimmed

    // $('.btn-catecory').click(function(){
    //     $('body').addClass('dimmed');
        
    // })
    // $('.close').click(function(){
    //     $('body').removeClass('dimmed');
    // })

    $('.btn-catecory').click(function (e) {
      e.preventDefault();
      $('.dimmed').addClass('active');
      $('body').addClass('hidden');
      
    })
    $('.close').click(function (e) {
      e.preventDefault();
      $('.dimmed').removeClass('active');
      $('body').removeClass('hidden');
    })
