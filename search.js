document.getElementById("google-search").onclick = function () {
    text = document.getElementById('google-enter').value
    if (text != "") {
        location.href = 'https://www.google.com/search?q=' + text + "&";
    }
    
}

var input = document.getElementById("google-enter")
var button = document.getElementById("google-search")

input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        button.click()
    }
});