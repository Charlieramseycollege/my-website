
$(document).ready(function () {

    $('.color-choose input').on('click', function () {
        var headphonesColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });

});

$(document).ready(function () {

    $('.color-choose2 input').on('click', function () {
        var headphonesColor = $(this).attr('data-image');

        $('.active2').removeClass('active2');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active2');
        $(this).addClass('active2');
    });

});


var inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function () {
        this.previousSibling.previousSibling.classList.remove('fadeIn');
        this.previousSibling.previousSibling.classList.add('fadeOut');
    });

    inputs[i].addEventListener('blur', function () {
        if (!this.value.length) {
            this.previousSibling.previousSibling.classList.remove('fadeOut');
            this.previousSibling.previousSibling.classList.add('fadeIn');
        }
    });
}