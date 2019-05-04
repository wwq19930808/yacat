wow = new WOW(
    {
        animateClass: 'animated',
        offset: 10,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
$(function () {
    var 
        headerBtnCon = $('.header_btn_con'),
        contactModal = $('.modal');

    setTimeout(function(){
        contactModal.fadeIn(1000);
    },5000);   
    contactModal.find('.close_btn').on('click', function () {
        contactModal.fadeOut(1000);
    })
    $('.contact_btn').on('click', function (e) {
        contactModal.fadeIn(1000);
        hideHeaderBtn();
        e.stopPropagation();
    })
    $(document).on('click', function (e) {
        if ($(e.target).parents('.modal').length == 0) {
            contactModal.fadeOut();
        }
    })

        $('.header_menu').on('click', function () {
            showHeaderBtn();
        })

        headerBtnCon.on('click', function (e) {
            //if ($(e.target).closest('a').length == 0) {
                hideHeaderBtn();
            //}
        })

    function showHeaderBtn() {
        headerBtnCon.addClass('header_btn_con_transition').css('left', 0)
    }
    function hideHeaderBtn() {
        headerBtnCon.css('left', '4.2rem')
    }
})
