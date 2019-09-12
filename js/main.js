// Elements for all pages 

//1- scroll top element
var scrollButton = $("#scroll-top");

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        scrollButton.show();
    } else {
        scrollButton.hide();
    }
});
scrollButton.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 150);
});

//2 - Navbar 
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

let indexPage = document.getElementById('doc0');
let uploadPage = document.getElementById('doc1');
let winnersPage = document.getElementById('doc2');
let votePage = document.getElementById('doc3');
let nomineesPage = document.getElementById('doc4');
let registrationPage = document.getElementById('doc5');
// index 
if (indexPage != null) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.header-main').addClass('fixed-top');
        } else {
            $('.header-main').removeClass('fixed-top');
        }
    });
    let dateTime = new Date();
    let month = dateTime.getUTCMonth() + 1; //months from 1-12
    let day = dateTime.getUTCDate();
    let year = dateTime.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    document.getElementById('date').innerHTML = newdate;


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
        });
    });
    $(".collect").click(function() {
        $(".collect-modal").show();
        $('#collect-title').css({ "color": "#49c5b6", "border-color": "#49c5b6" });
    })
    $(".close").click(function() {
        $(".collect-modal").hide();
    });

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
} else if (uploadPage != null) {

    let realFile = document.getElementById('real-file');
    let customFile = document.getElementById('custom-upload');
    customFile.addEventListener('click', function() {
        realFile.click();
    });
    // Winners
} else if (winnersPage != null) {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var increment = true;

    $('.likes').click(function() {

        $('.likes').css({ "color": "#49c5b6", "border-color": "#49c5b6" });
        let lik = $(this).find($(".count"));
        let likeNow = Number(lik.html());
        let increamentlikes = likeNow + 1;
        let decreamentlikes = increamentlikes - 1;
        lik.html(increamentlikes);
        $('.likes').click(function() {
            lik.html(decreamentlikes);
        });

    });

    $(".collect").click(function() {
        $(".collect-modal").show();
        $('#collect-title').css({ "color": "#49c5b6", "border-color": "#49c5b6" });

    });
    $(".close").click(function() {
        $(".collect-modal").hide();
    });
} else if (votePage != null) {
    let num = 0;

    $(".vote-now").click(function() {
        $(".vote-now").css("display", "none");
        $(".vote-overlay").css("display", "block");
        $(".overlay-bottom").css("display", "none");
        $(".design").show();
    });


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
                    });
                });
            });


        });
    };

    yourVote()

    $(".edit-vote").click(function() {
        $(".result").hide();
        $(".confirm-vote").hide();
        //       yourVote()
        $(".design").show();
        yourVote()
    });
    // Nominees
} else if (nomineesPage != null) {

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
        // Registration
} else if (registrationPage != null) {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}