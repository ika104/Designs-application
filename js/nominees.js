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




    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".collect").click(function() {
        $(".collect-modal").show();
        $('#collect-title').css({
            "color": "#49c5b6",
            "border-color": "#49c5b6"
        });

    })
    $("#close").click(function() {
        $(".collect-modal").hide();
    })



    let num = 0;

    $(".vote-now").click(function() {
        $(".vote-now").css("display", "none");
        $(".vote-overlay").css("display", "block");
        $(".overlay-bottom").css("display", "none");
        $(".design").show();
    })


    function yourVote() {
        $(".vote-value").click(function() {
            let val1 = parseInt(this.innerHTML);


            $(".confirm-vote").hide();
            $(".result").hide();


            $(".usability").show();
            $(".vote-value").click(function() {
                let val2 = parseInt(this.innerHTML);

                $(".confirm-vote").hide();
                $(".result").hide();


                $(".creativity").show();
                $(".vote-value").click(function() {
                    let val3 = parseInt(this.innerHTML);


                    $(".confirm-vote").hide();
                    $(".result").hide();



                    $(".content").show();
                    $(".vote-value").click(function() {
                        let val4 = parseInt(this.innerHTML);
                        num = val1 + val2 + val3 + val4
                        let avg = parseFloat(num / 4);
                        $(".content").hide();
                        $(".creativity").hide();
                        $(".usability").hide();
                        $(".design").hide();
                        $(".confirm-vote").show();
                        $(".result").show();
                        $(".average").html(avg);
                        $('.timer').countTo({
                            from: 0.00,
                            to: avg,
                            speed: 1000,
                            refreshInterval: 50,
                            decimals: 2,
                            separator: ','
                        });
                    })
                })
            })


        })
    }



    yourVote()

    $(".edit-vote").click(function() {
        $(".result").hide();
        $(".confirm-vote").hide();
        //       yourVote()
        $(".design").show();
        yourVote()


    })


})