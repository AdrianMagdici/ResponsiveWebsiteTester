squares = document.getElementById("squares");
fonts = document.getElementById("font-sizes");
body = document.body;

body.style.backgroundColor = "#106510";
body.style.margin = "4px";
squares.style.width = "1000px";
squares.style.height = "1000px";
squares.style.position = "relative";
fonts.style.position = "relative";

window.onload = () => {
    let counter = 0;
    for(let i = 1000; i>=20; i-=20) {
        element = document.createElement("div");
        text_comp = document.createTextNode(i + "px");

        element.style.width = i + "px";
        element.style.height = i + "px";
        if ((counter % 2) == 0) {
            element.style.backgroundColor = "#ff0000";
            element.style.color = "#000000";
        } else {
            element.style.backgroundColor = "#0000ff";
            element.style.color = "#ffffff";
        }

        counter++;
        element.style.position = "absolute";
        element.style.fontSize = "12px";
        element.appendChild(text_comp);
        squares.appendChild(element);
        element.style.bottom = 0;
        element.style.left = 0;
    }

    for(let i = 4; i<=200; i+=4) {
        element = document.createElement("p");
        text_comp = document.createTextNode(i + "px font");
        element.appendChild(text_comp);
        fonts.appendChild(element);
        element.style.color = "#ffffff";
        element.style.fontSize = i + "px";
        element.style.margin = "0px";
    }
}