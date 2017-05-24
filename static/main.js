//: Auto resize div based on window size
$(function(){
    $('.page').css({ height: $(window).innerHeight() });
    $(window).resize(function(){
        $('.page').css({ height: $(window).innerHeight() });
    });
});

//: Welcome message
var msg = "I'm Urian and I'll help you make stuff.",
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
