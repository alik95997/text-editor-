// var previewFontSizeElement = document.getElementById("previewFontSize");
// var previewFontSize = parseInt(previewFontSizeElement.innerHTML);
// var para = document.getElementById("para");

// function fontIncrease() {
//     ++previewFontSize;
//     previewFontSizeElement.innerHTML = previewFontSize;
//     para.style.fontSize = `${previewFontSize}px`
// }

// function fontDecrease() {
//     --previewFontSize;
//     previewFontSizeElement.innerHTML = previewFontSize;
//     para.style.fontSize = `${previewFontSize}px`
// }

function fontPT() {
    var selectFontSize = document.getElementById("selectFontSize");
    var sizeSelected = selectFontSize.value;
    var fontSize;
    if (sizeSelected == "14") {
        fontSize = 3;
    }
    else if (sizeSelected == "18") {
        fontSize = 4;
    }
    else if (sizeSelected == "24") {
        fontSize = 5;
    }
    else if (sizeSelected == "32") {
        fontSize = 6;
    }
    else if (sizeSelected == "48") {
        fontSize = 7;
    }

    document.execCommand("fontSize", false, fontSize);
}

function alignLeft() {
    document.execCommand("justifyLeft");
}

function alignRight() {
    document.execCommand("justifyRight");
}

function alignCenter() {
    document.execCommand("justifyCenter");
}
function alignJustify() {
    document.execCommand("justifyFul");
}
function noAlign() {
    document.execCommand("justifyLeft");
}

function colorChange() {
    var color = document.getElementById("colorPicker");

    color = color.value;
    document.execCommand("foreColor", false, color);
}

function bold() {
    document.execCommand("bold");
}

function italic() {
    document.execCommand("italic");
}

function underline() {
    document.execCommand("underline");
}

function strike() {
    document.execCommand("strikethrough");
}

function superScript() {
    document.execCommand("superscript");
}

function subScript() {
    document.execCommand("subscript");
}

function unorderlist() {
    document.execCommand("insertUnorderedList")
}

function orerderlist() {
    document.execCommand("insertOrderedList");
}
function undo() {
    document.execCommand("undo");
}
function redo() {
    document.execCommand("redo");
}