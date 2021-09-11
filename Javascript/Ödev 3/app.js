const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let buttonadd=document.querySelector(".btn-container")
let menulistadd=document.querySelector(".section-center")
let category=["All","Korea","Japan","China"]

function newbutton()
{  
  category.forEach(element => {
  let button = document.createElement("button");
  let txt = document.createTextNode(element);
  button.appendChild(txt);
  button.id=element
  button.className="btn btn-outline-dark btn-item"
  buttonadd.appendChild(button);
  }   )}
  newbutton()  
  function newelement($img, $title, $price, $desc){
    let item = document.createElement("div")
    item.classList.add("menu-items", "col-lg-6", "col-sm-12")
    menulistadd.append(item)
    let item_img = document.createElement("img")
    item_img.classList.add("photo")
    item_img.setAttribute("alt", $title)
    item_img.setAttribute("src", $img)
    item.append(item_img)
    let menu_info = document.createElement("div")
    menu_info.classList.add("menu-info")
    item.append(menu_info)
    let menu_title = document.createElement("div")
    menu_title.classList.add("menu-title")
    menu_info.append(menu_title)
    let title = document.createElement("h4")
    title.innerHTML = $title
    menu_title.append(title)
    let price = document.createElement("h4")
    price.classList.add("price")
    price.innerHTML = $price
    menu_title.append(price)
    let menu_text = document.createElement("div")
    menu_text.classList.add("menu-text")
    menu_text.innerHTML = $desc
    menu_info.append(menu_text)
  }
  function removelist(){
    let list = document.querySelectorAll(".col-lg-6")
    for(let i = 0; i<list.length; i++)
    menulistadd.removeChild(list[i])
  }
let buttonAll=document.querySelector("#All")
buttonAll.addEventListener("click",All)
let buttonKorea=document.querySelector("#Korea")
buttonKorea.addEventListener("click",Korea)
let buttonJapan=document.querySelector("#Japan")
buttonJapan.addEventListener("click",Japan)
let buttonChina=document.querySelector("#China")
buttonChina.addEventListener("click",China)

function All(){
  removelist()
  menu.forEach(element => {newelement(element.img, element.title, element.price, element.desc)});
}
function Korea(){
  removelist() 
  menu.map(element => {if (element.category == 'Korea') newelement(element.img, element.title, element.price, element.desc)
  else ""})
}

function Japan(){
  removelist()
  menu.map(element => {if (element.category == 'China') newelement(element.img, element.title, element.price, element.desc)
  else ""}) 
}
function China(){
  removelist()
  menu.map(element => {if (element.category == 'Japan') newelement(element.img, element.title, element.price, element.desc)
  else ""})
}
menu.forEach(element => {newelement(element.img, element.title, element.price, element.desc)}); 












