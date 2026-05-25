var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

button.onclick=function() {
    if (input.value > 12) {
        text.innerHTML = "inputi eshte ma i mad se 12";
    }
    else if (input.value < 12) {
        text.innerHTML = "inputi eshte më i vogël se 12";
    }
    else {
        text.innerHTML = "inputi eshte i barabarte me 12";
    }
}

