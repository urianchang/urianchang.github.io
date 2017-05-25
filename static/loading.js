document.onreadystatechange = function () {
    var state = document.readyState;
    console.log(state);
    if (state == 'interactive') {
       document.getElementById('content').style.visibility="hidden";
    } else if (state == 'complete') {
       document.getElementById('interactive');
       document.getElementById('loading').style.visibility="hidden";
       document.getElementById('content').style.visibility="visible";
    }
}
