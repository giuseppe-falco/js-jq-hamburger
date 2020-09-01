//////js solution onCLick
    // function myFunctionShow() {
    //   var x = document.getElementsByClassName("hamburger-menu")[0];
    //         x.style.display = "block";
    // }
    // function myFunctionHide() {
    //         x.style.display = "none";
    // }

////js solution more slow
    // document.getElementsByClassName("fas fa-bars")[0].addEventListener("click",
    //     function() {
    //     document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
    //     }
    // );

    // document.getElementsByClassName("fas fa-times")[0].addEventListener("click",
    //     function() {
    //     document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
    //     }
    // );


////////jquery solution addClass
    // $("i.fas.fa-bars").click(
    //     function() {
    //         $(".hamburger-menu").addClass("show");
    //     }
    // )

    // $("i.fas.fa-times").click(
    //     function() {
    //         $(".hamburger-menu").removeClass("show");
    //     }
    // )



//////jquery solution show/hide
    $("i.fas.fa-bars").click(
        function() {
            $(".hamburger-menu").show();
        }
    )

    $("i.fas.fa-times").click(
        function() {
            $(".hamburger-menu").hide();
        }
    )