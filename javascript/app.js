function showInfo(i) {
    var infoContents = document.getElementsByClassName("info-content");
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var j = 0; j < infoContents.length; j++) {
        infoContents[j].style.display = "none";  // hide all info contents
        tabButtons[j].classList.remove("clicked");
    }
    document.getElementById("info" + i).style.display = "block";
    document.getElementById("button" + i).classList.add("clicked");  // show the selected info content
}


function sendEmail() {
    window.location.href = "mailto:example@example.com?subject=Job Application&body=Your message here";
}

