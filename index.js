//add elements 
function list(){
    var li = document.createElement("li");
  var inputValue = document.getElementById("sec-add").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("sec-add").value = "";
//create close sign and like it to each created element
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  } 
  

}


//delete one element from close sign
var close = document.getElementsByClassName("close");
var i;
var div;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
     div = this.parentElement;
    div.removeChild("i"); 
  } 
 }


//check on one element
var lists = document.querySelector('ul');
lists.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  } 
}, false);

//delete all elements
function removeList(){
    var list = document.getElementsByTagName("ul");
    list[0].innerHTML = "";
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