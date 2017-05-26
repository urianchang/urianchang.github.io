$(document).ready( function() {
    //: Auto resize div based on window size
    $(function(){
        $('.page').css({ height: $(window).innerHeight() });
        $(window).resize(function(){
            $('.page').css({ height: $(window).innerHeight() });
        });
    });

    //: Welcome message
    var msg = "I'm Urian. I'll help you make stuff.",
        el = document.getElementById('typewriter'),
        character_count = 0;

    function updateText() {
        if (character_count === msg.length) {
            clearInterval(interval);
            $('.typewriter').css("border-right", "none");
        } else {
            var char = msg[character_count];
            if (char === " ") {
                char = "&nbsp;";
            }
            el.innerHTML += char;
            character_count++;
        }
    }

    var interval = setInterval(updateText, 100);

    //: Portfolio slideshow
    var slideIndex = 1;
    showDivs(slideIndex);

    $('#leftButton').click(function() {
        slideIndex -= 1;
        showDivs(slideIndex);
    });

    $('#rightButton').click(function() {
        slideIndex += 1;
        showDivs(slideIndex);
    });

    function showDivs(n) {
        // console.log("button pressed", n);
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "inline-block";
    }
})
