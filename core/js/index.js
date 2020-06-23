
$("html").css("background-color", "#252F35");
$("#container").hide();
$("#landing-page h1").hide();
$("#landing-page p").hide();

$("#container").fadeIn(1500, function() {
    $("#landing-page h1").fadeIn(750, function() {
        $("#landing-page p").fadeIn(375, function() {
            let slogan = document.getElementById("landing-page-slogan");
            let typewriter = new Typewriter(slogan, {
                loop: true,
                delay: 75
            });

            typewriter.typeString("Redefining Innovation")
                .pauseFor(2000)
                .deleteChars(10)
                .typeString("Design")
                .pauseFor(2000)
                .deleteChars(6)
                .typeString("Development")
                .pauseFor(2000)
                .deleteChars(11)
                .typeString("Engineering")
                .pauseFor(2000)
                .deleteChars(11)
                .typeString("Creativity")
                .pauseFor(5000)
                .deleteChars(10)
                .start();
        });
    });
});

$("#about-page h1").hide();
$("#about-page-p1").hide();
$("#about-page-p2").hide();
$("#about-page-p3").hide();
$("#about-page-p4").hide();

setInterval(function() {

    if ($("html").scrollTop() >= $("#about-page h1").height() + (window.innerHeight * 0.3)) {
        $("#about-page h1").fadeIn(500, function() {});
    } else {
        $("#about-page h1").fadeOut(500, function() {});
    }

    if ($("html").scrollTop() >= $("#about-page h1").height() + $("#about-page-p1").height() + (window.innerHeight * 0.3)) {
        $("#about-page-p1").fadeIn(500, function() {});
    } else {
        $("#about-page-p1").fadeOut(500, function() {});
    }

    if ($("html").scrollTop() >= $("#about-page h1").height() + $("#about-page-p1").height() + $("#about-page-p2").height() + (window.innerHeight * 0.3)) {
        $("#about-page-p2").fadeIn(500, function() {});
    } else {
        $("#about-page-p2").fadeOut(500, function() {});
    }

    if ($("html").scrollTop() >= $("#about-page h1").height() + $("#about-page-p1").height() + $("#about-page-p2").height() + $("#about-page-p3").height() + (window.innerHeight * 0.3)) {
        $("#about-page-p3").fadeIn(500, function() {});
    } else {
        $("#about-page-p3").fadeOut(500, function() {});
    }

    if ($("html").scrollTop() >= $("#about-page h1").height() + $("#about-page-p1").height() + $("#about-page-p2").height() + $("#about-page-p3").height() + $("#about-page-p4").height() + (window.innerHeight * 0.3)) {
        $("#about-page-p4").fadeIn(500, function() {});
    } else {
        $("#about-page-p4").fadeOut(500, function() {});
    }

}, 100);