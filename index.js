let ul = document.getElementById("list")
//add elements 
function list(){
  const li = document.createElement("li");
  let inputValue = document.getElementById("sec-add").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    ul.appendChild(li);
  }

  document.getElementById("sec-add").value = "";

//create close sign and like it to each created element
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
localStorage['lists'] = ul.innerHTML
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      localStorage["lists"] = ul.innerHTML
    }
  } 
}

//delete one element from close sign
const close = document.getElementsByClassName("close");
let i , div;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
     div = this.parentElement;
    div.removeChild("i"); 
    localStorage['lists'] = ul.innerHTML
  } 
 }

 if (localStorage["lists"]) {
  ul.innerHTML = localStorage["lists"];
}

//check on one element
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    localStorage['lists'] = ul.innerHTML
  } 
}, false);

//delete all elements
function removeList(){
    var list = document.getElementsByTagName("ul");
    list[0].innerHTML = "";
    localStorage['lists'] = ul.innerHTML
}


//change mode to dark
 function changeMode(){
document.body.style.background= "hsl(235, 21%, 11%)";

let att6 = document.createAttribute("class");
att6.value="changeInput";
document.getElementsByTagName("input")[0].setAttributeNode(att6);

let att5 = document.createAttribute("class");
att5.value="changeDiv";
document.getElementsByTagName("div")[0].setAttributeNode(att5);

let att2 = document.createAttribute("class");
att2.value="changeHeader";
document.getElementsByTagName("header")[0].setAttributeNode(att2);
}

//change mode to light
function changeMode2(){
    document.body.style.background= "white";
        
    let att6 = document.createAttribute("class");
    att6.value="sec-add";
    document.getElementsByTagName("input")[0].setAttributeNode(att6);
    
    let att5 = document.createAttribute("class");
    att5.value="div-style";
    document.getElementsByTagName("div")[0].setAttributeNode(att5);
    
    let att2 = document.createAttribute("class");
    att2.value="head-bg";
    document.getElementsByTagName("header")[0].setAttributeNode(att2);
    }
