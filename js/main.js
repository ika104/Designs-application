$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        // open sidebar
        $('#wrapper').addClass('toggled');
        // fade in the overlay
        $('.overlay-page').addClass('toggled');
    });

    $('#dismiss, .overlay-page').click(function() {
        // hide sidebar
        $('#wrapper').removeClass('toggled');
        // hide overlay
        $('.overlay-page').removeClass('toggled');
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.header-main').addClass('fixed-top');
        } else {
            $('.header-main').removeClass('fixed-top');
        }

    });
    let check_id = document.body.id;
    if (check_id == "doc0") {
        let dateTime = new Date();
        let month = dateTime.getUTCMonth() + 1; //months from 1-12
        let day = dateTime.getUTCDate();
        let year = dateTime.getUTCFullYear();

        newdate = year + "/" + month + "/" + day;
        document.getElementById('date').innerHTML = newdate;
    }


    /** */
    $('.like').click(function() {

        $('.likes').css({ "color": "#49c5b6", "border-color": "#49c5b6" });
        let lik = $(this).find($(".count"));
        let likeNow = Number(lik.html());
        let increamentlikes = likeNow + 1;
        let decreamentlikes = increamentlikes - 1;
        lik.html(increamentlikes);
        $('.like').click(function() {
            lik.html(decreamentlikes);
        })

    });



    $(".collect").click(function() {
        $(".collect-modal").show();
        $('#collect-title').css({ "color": "#49c5b6", "border-color": "#49c5b6" });

    })
    $(".close").click(function() {
        $(".collect-modal").hide();
    })

    $(".likeBtn").click(function() {

        let likes = $(this).find("span");
        let likesNow = Number(likes.html());

        let incrementLikes = likesNow + 1;
        let decrementLikes = incrementLikes - 1;

        likes.html(incrementLikes);
        $(".likeBtn").click(function() {
            likes.html(decrementLikes);
        });
    });
    /* Upload Page */
    let check1_id = document.body.id;
    if (check1_id == "doc1") {
        let realFile = document.getElementById('real-file');
        let customFile = document.getElementById('custom-upload');
        customFile.addEventListener('click', function() {
            realFile.click();
        });
    }




    // scroll top element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });

    // Click On Button Top     

    scrollButton.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 150);
    });
});