document.addEventListener("DOMContentLoaded", function(event) {
    //set icon
    var setIcon = function(href) {
        document.querySelector("#favicon").href = href;
    }
    //set logo
    var colours = ["#ffaa3e", "#1dc116", "#b43d3d"];
    var $el = document.querySelector('.head>a');
    var txt = $el.text;
    var chars = txt.split("");
    var conString = "";
    chars.forEach(function(char) {
        var colour = colours[Math.floor(Math.random() * colours.length)];
        if(char == "M") {
            if(location.href.includes("getStarted") || location.href.includes("contact")) {
                setIcon("../icons/m_" + colour.split("#")[1] + ".ico");
            } else {
                setIcon("./icons/m_" + colour.split("#")[1] + ".ico");
            }
        }
        conString += "<span style='color: " + colour + "'>" + char + "</span>"
    });
    console.log(conString);
    $el.innerHTML = conString;
});