
$("html").css("background-color", "#23323F");
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