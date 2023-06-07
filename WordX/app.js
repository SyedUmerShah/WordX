const textArea = document.getElementById("text")

function color() {
    var color = document.getElementById("color").value;
    textArea.style.color = color;
}

function bold() {
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal"
    }
    else {
        textArea.style.fontWeight = "bold"
    }

}

function underline() {
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none"
    }
    else {
        textArea.style.textDecoration = "underline"
    }

}

function italic() {
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal"

    }
    else{
        textArea.style.fontStyle = "italic"

    }
}

function f5(i) {
    let value = fontSize.value;
    text.style.fontSize = value + "px";
    console.log(value)
}
function f6(){
    textArea.style.textAlign = "left"
}
function f7(){
    textArea.style.textAlign = "center"
}
function f8(){
    textArea.style.textAlign = "right"
}
function f9(){
   if ( textArea.style.textTransform == "uppercase") {
    textArea.style.textTransform = "none"
   }
   else{
    textArea.style.textTransform = "uppercase"
   }
}
