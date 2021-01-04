function img_on(img) {
    let newurl = "";
    let theseclasses = document.getElementsByClassName("icon");
    for (i = 0; i < theseclasses.length; i++)
    {
        let thisclass = theseclasses.item(i).classList[1];
        let thisurl = "styles/icon-" + thisclass + ".png";
        if ((img.getAttribute("src")) == thisurl)
        {
            newurl = "styles/icon-" + thisclass + "-flip.png";  
        }
    };
    img.src = newurl;
}

function img_off(img) {
    let newurl = "";
    let theseclasses = document.getElementsByClassName("icon");
    for (i = 0; i < theseclasses.length; i++)
    {
        let thisclass = theseclasses.item(i).classList[1];
        let thisurl = "styles/icon-" + thisclass + "-flip.png";
        if ((img.getAttribute("src")) == thisurl)
        {
            newurl = "styles/icon-" + thisclass + ".png";    
        }
    };
    img.src = newurl;
}

 function lets_get_fancy() {
    for(i=0; i<200; i++){
        document.getElementById("big-box").innerHTML += '<div class="fancy-box" onmouseover="fancytime(this)" onmouseout="unfancy(this)"></div>'
    }
}
function fancytime(divvy) {
    let fancy_color = '#'+Math.floor(Math.random()*16777215).toString(16);
    divvy.style.backgroundColor=fancy_color;
    // divvy.style.boxShadow='0 0 15px magenta';
}

function unfancy(divvy) {
    divvy.style.backgroundColor="";
}