jQuery(function ($) {
    $(document).ready(function () {
        $('#next1').click(function () {
            addAnimation('#modalBox1', 'fadeOut');
            addAnimation('#modalBox2', 'fadeIn');
        });

        function addAnimation(element, animation) {
            if (animation === 'fadeIn') {
                $(element).removeClass('animated-disable');
            }
            removeAnimation(element, animation);
            $(element).addClass('animated ' + animation);
        }

        function removeAnimation(element, animation) {
            $(element).removeClass('animated ' + animation);
            if (animation === 'fadeOut') {
                $(element).addClass('animated-disable');
            }

        }

    });
});

/*
// Step 1
$('#modalBox1').click(e => {
    e.preventDefault();
    $('#dialog-box-1').removeClass('dialog-box-1');
    $('#dialog-box-2').addClass('dialog-box-2');
    e.stopPropagation();
});

// Step 2
$('#modalBox2').click(e => {
    e.preventDefault();
    $('#dialog-box-2').removeClass('dialog-box-2');
    $('#dialog-box-3').addClass('dialog-box-3');
    e.stopPropagation();
});

// Step 3
$('#modalBox3').click(e => {
    e.preventDefault();
    $('.dialog').removeClass('dialog-open');
    $('#dialog-box-3').removeClass('dialog-box-3');
    e.stopPropagation();
});

 */