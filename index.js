var _ = require("lodash");
var array = [1,2,4,5,5,6,7,7,88,8,9];
console.log(_.without(array,4));


var del = document.getElementsByClassName("delete")[0];
var submit = document.getElementById("submit");
var bgbody = document.getElementById("bgbody");
var ul = document.querySelector("ul");
var inputNumber = document.getElementById("number");
var inputcolor = document.getElementById("colorpick");
var inputcolor2 = document.getElementById("colorpick2");


function addElement(event) {
    var name = document.getElementById("name1");
    var number = document.getElementById("number");
    console.log("start");
    var li = document.createElement("li");
    var span = document.createElement("span");
    var del = document.createElement("input");
    li.className = "item";
    del.type = "button";
    del.value = "Delete";
    del.className = "delete";
    if (number.value.length > 0 || event.keycode === 13) {
        console.log("Middle" + name.value);
        span.appendChild(document.createTextNode(name.value + "  " + number.value));
        li.appendChild(span);
        li.appendChild(del);
        ul.appendChild(li);
        addDeleteButton();

    }

}
function deleteElement(evt) {
    addDeleteButton();
    evt.target.parentNode.remove();
}
function addDeleteButton() {
    let delbutton = document.getElementsByClassName("delete");
    for (let i = 0; i < delbutton.length; i++) {
        delbutton[i].addEventListener("click", deleteElement);
        console.log("Making button");

    }
}

function colorpicker() {
    console.log(inputcolor.value);
    bgbody.style.background = "linear-gradient(to right ," + inputcolor.value + "," + inputcolor2.value + ")";
}
addDeleteButton();

submit.addEventListener("click", addElement);
inputNumber.addEventListener("click", addElement);
inputcolor.addEventListener("input", colorpicker);
inputcolor2.addEventListener("input", colorpicker);

