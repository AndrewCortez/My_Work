$(document).ready(function() {
    $('.fa-bars').click(function() {
        $('header nav').css('left', '0');
    });
    $('.closej').click(function() {
        $('header nav').css('left', '-100vw');
    });

    $('.sortheader a').click(function() {
        event.preventDefault();
        let data = $(this).attr('data');
        if (data == 'all') {
            $('#sort figure').show(500);
        } else {
            $('#sort figure').hide(500);
            $('#sort .' + data).show(500);
        }
    });
    $('.v-modal').click(function() {
        event.preventDefault();
        // Блокує оновлення сторінки
        $('.modal-bg').css('display', 'flex');
        // Показує форму що була схована
        let title = $(this).html();
        // this конкретний по якому клацнули
        $('.v-content h3').html(title);
        $('input[type="hidden"]').val(title);
    });
    $('.v-close').click(function() {
        $('.modal-bg').hide();
    });


    // $('.owl-prev.span').html('<i class="fa fa-angle-left"></i>');
    // $('.owl-next.span').html('<i class="fa fa-angle-right"></i>');
    // Можна змінити малюночки на кнопках перемикання фото
    $(window).paroller();
    $('.owl-carousel').owlCarousel({
        // items: 1.8,
        margin: 10,
        padding: 0,
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            758: {
                items: 2
            },
            1170: {
                items: 2.2
            }
        }

    });

});