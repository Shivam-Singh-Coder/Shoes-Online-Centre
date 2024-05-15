$(document).ready(function () {
    $('.contact td input, .contact td textarea').click(function (e) {
        len = $(this).val().length;
        if (len == 0) {
            $(this).siblings('label').css('top', '-0.3rem');
            $(this).siblings('label').css('z-index', '1');
        }
    });
    $('.contact td input, .contact td textarea').focusout(function (e) {
        len = $(this).val().length;
        if (len == 0) {
            $(this).siblings('label').css('top', '2rem');
            $(this).siblings('label').css('z-index', '-1');
        }
    });
});


function alphabets(name) {
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed')
            return false;
        }
        else if (e.which == 32) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else if (e.which == 8) {
            $(name).siblings('span').html('')
        }
        else {
            $(name).siblings('span').html('')
        }
    })
}



function number(no) {
    $(no).keypress(function (e) {
        if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed')
            e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else {
            $(no).siblings('span').html('')
        }
    })
}
