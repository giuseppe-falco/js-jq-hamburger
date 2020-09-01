//////js solution onCLick
    // var x = document.getElementsByClassName("hamburger-menu")[0];
    // function myFunctionShow() {
    //         x.style.display = "block";
    // }
    // function myFunctionHide() {
    //         x.style.display = "none";
    // }

////js solution more slow
    // document.getElementsByClassName("fa-bars")[0].addEventListener("click",
    //     function() {
    //     document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
    //     }
    // );

    // document.getElementsByClassName("close")[0].addEventListener("click",
    //     function() {
    //     document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
    //     }
    // );


////////jquery solution addClass
    $(".header-right > a").click(
        function() {
            $(".hamburger-menu").addClass("active");
        }
    )

    $(".hamburger-menu > a").click(
        function() {
            $(".hamburger-menu").removeClass("active");
        }
    )



//////jquery solution show/hide
    // $(".header-right > a").click(
    //     function() {
    //         $(".hamburger-menu").show();
    //     }
    // )

    // $(".hamburger-menu > a").click(
    //     function() {
    //         $(".hamburger-menu").hide();
    //     }
    // )