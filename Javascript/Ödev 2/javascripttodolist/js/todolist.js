
let buttontoast=document.querySelector("#liveToastBtn")
buttontoast.addEventListener("onclick",button=(event) => event.preventDefault())
let closebtns = document.getElementsByClassName("close");
let spanlist = document.getElementsByTagName("li");


for (i = 0; i < spanlist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  spanlist[i].appendChild(span);
}
for (let= i = 0; i < closebtns.length; i++) {
closebtns[i].addEventListener("click", function(event) {
event.preventDefault()
this.parentElement.style.display = 'none';
});}

list.addEventListener("click",function (event) {
event.preventDefault()
if (event.target.tagName === "LI") {
event.target.classList.toggle("checked");}},);

function newElement() {
    let taskDom=document.querySelector("#task").value
    const ListDom=document.querySelector("#list")
    const liDOM = document.createElement('li')
    liDOM.innerHTML=`${taskDom} `
    if  (taskDom===""|| taskDom.replace(/\s/g,"").length==0 )
        {$(".error").toast("show")}
    else 
    {  ListDom.append(liDOM) 
      $('.success').toast('show') }
    document.getElementById("task").value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);
    
    for (let= i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function(event) {
      event.preventDefault()
      this.parentElement.style.display = 'none';});}
}











