function init() {
    // set up dotNotation
    var btn1 = document.getElementById("btnAverage");
    var btn2 = document.getElementById("btnGood");
    var btn3 = document.getElementById("btnExcellent");
    btn1.onclick = dotNotation;
    btn2.onclick = dotNotation;
    btn3.onclick = dotNotation;

    if (window.addEventListener) {
        // Set up onclick event handler, w3c. Use addEventListener
        var btnSet3 = document.getElementById("btns3");
        // console.log(btnSet3.children);
        btnSet3.addEventListener("click", function(event) {
            if (btnSet3 !== event.target) {
                w3c(event.target.value);
            }
        }, false);
    } else {
        var btnSet3 = document.getElementById("btns3");
        // console.log(btnSet3.children);
        btnSet3.attachEvent("click", function(event) {
            if (btnSet3 !== event.target) {
                w3c(event.target.value);
            }
        });
    }
}

function dotNotation() {
    var control;
    if (window.event) {
        control = window.event.srcElement
    } else {
        control = this
    }
    console.log(control.value);
}

function w3c(btns3) {
    console.log(btns3);
}
