
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

$("#solutions-page h1").hide();

$("#solutions-page-software").hide();
$("#solutions-page-software h2").hide();
$("#solutions-page-solution-pos").hide();
$("#solutions-page-solution-expert").hide();

$("#solutions-page-air-quality").hide();
$("#solutions-page-air-quality h2").hide();
$("#solutions-page-solution-ozone").hide();

$("#solutions-page-water-quality").hide();
$("#solutions-page-water-quality h2").hide();
$("#solutions-page-solution-nanobubbles").hide();

setInterval(function() {

    if ($("#about-page-p4").is(":visible")) {

        $("#solutions-page").show();

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page h1").fadeIn(500, function() {});
        } else {
            $("#solutions-page h1").fadeOut(500, function() {});
        }
    
        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + (window.innerHeight * 0.4)) {
            $("#solutions-page-software").fadeIn(500, function() {});
        } else {
            $("#solutions-page-software").fadeOut(500, function() {});
        }
    
        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page-software h2").fadeIn(500, function() {});
        } else {
            $("#solutions-page-software h2").fadeOut(500, function() {});
        }
    
        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page-solution-pos").fadeIn(500, function() {});
        } else {
            $("#solutions-page-solution-pos").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page-solution-expert").fadeIn(500, function() {});
        } else {
            $("#solutions-page-solution-expert").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + (window.innerHeight * 0.7)) {
            $("#solutions-page-air-quality").fadeIn(500, function() {});
        } else {
            $("#solutions-page-air-quality").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + $("#solutions-page-air-quality h2").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page-air-quality h2").fadeIn(500, function() {});
        } else {
            $("#solutions-page-air-quality h2").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + $("#solutions-page-air-quality h2").height() + $("#solutions-page-solution-ozone").height() + (window.innerHeight * 0.5)) {
            $("#solutions-page-solution-ozone").fadeIn(500, function() {});
        } else {
            $("#solutions-page-solution-ozone").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + $("#solutions-page-air-quality h2").height() + $("#solutions-page-solution-ozone").height() + (window.innerHeight * 0.9)) {
            $("#solutions-page-water-quality").fadeIn(500, function() {});
        } else {
            $("#solutions-page-water-quality").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + $("#solutions-page-air-quality h2").height() + $("#solutions-page-solution-ozone").height() + $("#solutions-page-water-quality h2").height() + (window.innerHeight * 0.3)) {
            $("#solutions-page-water-quality h2").fadeIn(500, function() {});
        } else {
            $("#solutions-page-water-quality h2").fadeOut(500, function() {});
        }

        if ($("html").scrollTop() >= $("#about-page").height() + $("#solutions-page h1").height() + $("#solutions-page-software h2").height() + $("#solutions-page-solution-pos").height() + $("#solutions-page-solution-expert").height() + $("#solutions-page-air-quality h2").height() + $("#solutions-page-solution-ozone").height() + $("#solutions-page-water-quality h2").height() + $("#solutions-page-solution-nanobubbles").height() + (window.innerHeight * 0.7)) {
            $("#solutions-page-solution-nanobubbles").fadeIn(500, function() {});
        } else {
            $("#solutions-page-solution-nanobubbles").fadeOut(500, function() {});
        }

    } else {
        $("#solutions-page").hide();
    }

}, 100);