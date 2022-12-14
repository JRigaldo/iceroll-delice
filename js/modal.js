jQuery(function ($) {
    $(document).ready(function () {

        /*
        $('.next-1').click(function () {
            addAnimation('.step-1', 'fadeOut');
            addAnimation('.step-2', 'fadeIn');
        });

        $('.next-2').click(function () {
            addAnimation('.step-2', 'fadeOut');
            addAnimation('.step-3', 'fadeIn');
        });

        $('.prev-2').click(function () {
            addAnimation('.step-2', 'fadeIn');
            addAnimation('.step-1', 'fadeOut');
        });

        $('.prev-3').click(function () {
            addAnimation('.step-3', 'fadeOut');
            addAnimation('.step-2', 'fadeIn');
        });

        function addAnimation(element, animation) {
            if (animation === 'fadeIn') {
                $(element).removeClass('animated-disable');
            }
            if (animation === 'fadeOut') {
                $(element).addClass('animated-disable');
            }
            $(element).removeClass(animation);
            $(element).addClass(animation);
        }


         */


        $('.next-1').click(function () {
            fadeAnimation('.step-1', 'fadeOut', '.step-2', 'fadeIn');
            activeTransition('.step-1', '.step-2');
            scrollTop('.step-2');
        });

        $('.next-2').click(function (event) {
            fadeAnimation('.step-2', 'fadeOut', '.step-3', 'fadeIn');
            activeTransition('.step-2', '.step-3');
            scrollTop('.step-3');
        });

        $('.prev-2').click(function (event) {
            fadeAnimation('.step-2', 'fadeOut', '.step-1', 'fadeIn');
            activeTransition('.step-2', '.step-1');
            scrollTop('.step-1');
        });

        $('.prev-3').click(function () {
            fadeAnimation('.step-3', 'fadeOut', '.step-2', 'fadeIn');
            activeTransition('.step-3', '.step-2');
            scrollTop('.step-2');
        });

        function fadeAnimation(prevElement, prevAnimation, nextElement, nextAnimation) {
            $(nextElement).addClass(nextAnimation);
            $(prevElement).addClass(prevAnimation);
            if($(prevElement).hasClass('fadeIn') === true){
                $(prevElement).removeClass('fadeIn');
            }
            if($(nextElement).hasClass('fadeOut') === true){
                $(nextElement).removeClass('fadeOut');
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
            }, 200);
        }
    });
});