jQuery(function ($) {
    $(document).ready(function () {

        $('.next-1').click(function () {
            fadeAnimation('.step-1', 'fadeOutLeft', '.step-2', 'fadeInRight');
            activeTransition('.step-1', '.step-2');
            scrollTop('.form-modal--container');
        });

        $('.next-2').click(function (event) {
            fadeAnimation('.step-2', 'fadeOutLeft', '.step-3', 'fadeInRight');
            activeTransition('.step-2', '.step-3');
            scrollTop('.form-modal--container');
        });

        $('.prev-2').click(function () {
            fadeAnimation('.step-2', 'fadeInLeft', '.step-1', 'fadeOutRight');
            activeTransition('.step-2', '.step-1');
            scrollTop('.form-modal--container');
        });

        $('.prev-3').click(function () {
            fadeAnimation('.step-3', 'fadeInLeft', '.step-2', 'fadeOutRight');
            activeTransition('.step-3', '.step-2');
            scrollTop('.form-modal--container');
        });

        function fadeAnimation(prevElement, prevAnimation, nextElement, nextAnimation) {
            $(nextElement).addClass(nextAnimation);
            $(prevElement).addClass(prevAnimation);
            if($(prevElement).hasClass('fadeInRight') === true){
                $(prevElement).removeClass('fadeInRight');
            }
            if($(nextElement).hasClass('fadeOutLeft') === true){
                $(nextElement).removeClass('fadeOutLeft');
            }
            if($(nextElement).hasClass('fadeInLeft') === true){
                $(nextElement).removeClass('fadeInLeft');
            }
            if($(prevElement).hasClass('fadeOutRight') === true){
                $(prevElement).removeClass('fadeOutRight');
            }
        }

        function activeTransition(prevElement, nextElement){
            $(nextElement).addClass('animated-active');
            $(prevElement).removeClass('animated-active');
            setTimeout(function(){
                $(nextElement).removeClass('animated-disable');
                $(prevElement).addClass('animated-disable');
            }, 500);
        }

        function scrollTop(container){
            $("html, body").animate({
                scrollTop: $(container).offset().top - 100
            }, 500);
        }
    });
});