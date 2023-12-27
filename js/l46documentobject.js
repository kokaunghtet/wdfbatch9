// 24 August
// 28 August
// 29 August
// 4 September
// 5 September
// 6 September

let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL; //file:///D:/dltwdfbatch9/l46documentobject.html

val = document.links; // => HTMLCollection
val = document.links[0]; //<a href="#" id="delete-item1" class="delete-item">…</a>
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item">…</a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clear-all

// val = document.links[3].class; //undefined

val = document.links[3].className; //delete-item my-item

val = document.links[3].classList; // => DOMTokenList
//DOMTokenList(2) ['delete-item', 'my-item', value: 'delete-item my-item']
val = document.links[3].classList[0]; //delete-item
val = document.links[3].classList[1]; //my-item

val = document.forms; // => HTMLCollection
val = document.forms[0]; //<form id="form" class="form" action method>…</form>
val = document.forms[0].id; //form
val = document.forms[0].className; //form
val = document.forms[0].classList; // => DOMTokenList ['form', value: 'form']
val = document.forms[0].classList[0]; //form
val = document.forms[0].action; // file:///D:/dltwdfbatch9/l46documentobject.html
val = document.forms[0].method; //get/post

val = document.images; // => HTMLCollection
val = document.images[0];
val = document.images[0].id; //loading
val = document.images[0].className; //loading
val = document.images[0].classList; //DOMTokenList
val = document.images[0].classList[0]; //loading
val = document.images[0].src; //https://i.gifer.com/ZKZg.gif
val = document.images[0].alt; //loader

val = document.scripts; // => HTMLCollection
val = document.scripts[0]; //<script src="./js/l46documentobject.js" type="text/javascript"></script>
val = document.scripts[0].src; //file:///D:/dltwdfbatch9/js/l46documentobject.js
val = document.scripts[0].type; //text/javascript

// console.log(val);

// Change styling
// ==============
// document.getElementById("tasktitle").style.backgroundColor = "green";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "10px 0";
// document.getElementById("tasktitle").style.borderRadius = "5px";

//Change content
// =============
// document.getElementById("tasktitle").textContent = "My Lists";
// document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerHTML =
//   "<span style='color:yellow'>My Jobs</span>";

// Call by class name
// ==================
const lis = document.getElementsByClassName("list-group-item"); // => HTMLCollection
// console.log(lis);
// console.log(lis[2]);

// lis[2].style.color = "steelblue";
// lis[2].innerHTML = `Have to read <a href="#" id="delete-item4" class="delete-item my-item"><i class="fas fa-trash-alt"></i></a>`;

// Call by tag name (Element)
// ==========================

const litags = document.getElementsByTagName("li"); // => HTMLCollection
// console.log(litags);
// console.log(litags[3]);

// litags[3].style.color = "firebrick";
// litags[3].innerHTML = `Have to cook <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// Query Selector
// ==============

// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li")); // only 1st one
// console.log(document.querySelector(".list-group-item")); // only 1st one

// document.querySelector("li").style.color = "blue";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.backgroundColor = "#777";
// document.querySelector("ul li:nth-child(even)").style.backgroundColor = "red";
// document.querySelector("ul li:last-child").style.color = "cyan";
// document.querySelector("ul li:last-of-type").style.color = "cyan";
// document.querySelector("ul li:nth-of-type(4)").style.color = "#ff0000";

// Query Selector All
// ==================
// console.log(document.querySelectorAll("#tasktitle")); // => NodeList
// console.log(document.querySelectorAll("#tasktitle")[0]);

// console.log(document.querySelectorAll("li")); //NodeList
// console.log(document.querySelectorAll(".list-group-item")); // => NodeList

const itms = document.querySelectorAll("li");
// console.log(itms); // => NodeList
// console.log(itms[1]);

// ------------------------------------------------
// 28 August
// =========

const listitems = document
  .querySelector("ul")
  .getElementsByClassName("list-group-item");
// console.log(listitems); // => HTMLCollection
// console.log(typeof listitems); // =>object
// console.log(listitems[0]);

// const arritems = Array.from(listitems);
// console.log(arritems); // => Array

// arritems.forEach(function (arritem, idx) {
//   // console.log(arritem);
//   // arritem.textContent = "Hello";

//   // arritem.textContent = `${idx}:  Hello`;
//   arritem.textContent = `${++idx}:  Hello`;
// });

const listitms = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(listitms); // => Nodelist
// console.log(typeof listitms); // => object
// console.log(listitms[3]);

// listitms.forEach(function (listitm, idx) {
//   // console.log(listitm);

//   // listitm.innerText = "Hello World";
//   listitm.innerHTML = `${++idx}:  Hello`;
// });

const lisodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(lisodds); // => NodeList

const lisevens = document.querySelectorAll("li:nth-child(even)");
// console.log(lisevens); // => NodeList

lisodds.forEach(function (lisodd) {
  lisodd.style.backgroundColor = "#777";
});

lisevens.forEach(function (liseven) {
  liseven.style.backgroundColor = "#999";
});
// for (let i = 0; i < lisevens.length; i++) {
//   // console.log(i);
//   lisevens[i].style.backgroundColor = "#999";
// }

// Children (js keyword)
// =====================
// var getli = document.querySelector("ul li");
// var getli = document.querySelector("li.list-group-item");
var getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

let chl;

const getul = document.querySelector("ul.list-group");
// console.log(getul);

chl = getul.children; // => HTMLCollection
console.log(chl);
console.log(chl[2]);

// chl[1].textContent = "Have to go";
getul.children[3].innerText = "Have to cook";
chl[4].innerHTML = `Have to read <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// --------------------------------------------
// 29 August
// =========

// => Parent to Children to  Children
// ==================================
chl = getul.children; // => HTMLCollection
chl = getul.children[0];
chl = getul.children[0].children; // => HTMLCollection
//    ul    li          a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList;
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

chl = getul.children[0].children[0].children; // =>HTMLCollection
//    ul    li          a           i
chl = getul.children[0].children[0].children[0];

// console.log(chl);

// Child Element Count
// ===================
// chl = getul.children.length; // 5
chl = getul.childElementCount; // 5

//       ul    li
// chl = getul.children[0].childElementCount; //1
//       ul    li          a
// chl = getul.children[0].children[0].childElementCount; //1

console.log(chl);

// Child to Parent
// ===============
const getfirstli = document.querySelector("li.list-group-item:first-child");

let getparent = getfirstli.parentElement;
//          li         ul           .card-action
getparent = getfirstli.parentElement.parentElement;
//          li         ul           .card-action  .card
getparent = getfirstli.parentElement.parentElement.parentElement;

console.log(getparent);

// Next Element sibling
// =====================

let getsibling = getfirstli; // li.1
getsibling = getfirstli.nextElementSibling; // li.2
getsibling = getfirstli.nextElementSibling.nextElementSibling; // li.3
getsibling =
  getfirstli.nextElementSibling.nextElementSibling.nextElementSibling; // li.4
getsibling =
  getfirstli.nextElementSibling.nextElementSibling.nextElementSibling
    .nextElementSibling; // li.5
getsibling =
  getfirstli.nextElementSibling.nextElementSibling.nextElementSibling
    .nextElementSibling.nextElementSibling; //null
console.log(getsibling);

// Previous Element Silbling
// =========================

getsibling =
  // li1     li2                li3                li2
  getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

// li1        li1                    error
// getfirstli.previousElementSibling.previousElementSibling; // error

console.log(getsibling);

// Create Element
// ==============
const newli = document.createElement("li");

// Add ID
// ======
newli.id = "newli";

// Add Class
// // =========
// newli.className = "list-group-item";
// newli.className = "delete-me";
newli.className = "list-group-item delete-me";

// newli.classList.add("delete-i");
// newli.classList.add("delete-you");
newli.classList.add("delete-us", "delete-you", "delete-him", "delete-them");

// Add Attribute
// =============
// setAttribute("qualified name", "value")
newli.setAttribute("title", "new-item");

// Add Text
// ========
// newli.textContent = "hey";
// newli.innerText = "hello";
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item3" class="delete-item">
//               <i class="fas fa-trash-alt"></i>
//             </a>`;

// --------------------------------------------
// 30 August
// =========

// const newText = document.createTextNode("Hello World");
// newli.appendChild(newText);

newli.appendChild(document.createTextNode(`Hello Burma`));
// console.log(newli);

const newlink = document.createElement("a");
// Add href
newlink.href = "#";
// Add Id
newlink.id = "delete-item6";
// Add Class
// newlink.className = "delete-item";
newlink.classList.add(
  "delete-item",
  "delete-i",
  "delete-you",
  "delete-we",
  "delete-they"
);
// console.log(newlink);

const newitalic = document.createElement("i");
// Add class
// newitalic.className("fas fa-trash-alt");
newitalic.classList.add("fas", "fa-trash-alt");
// console.log(newitalic);

newlink.appendChild(newitalic);
// console.log(newlink);

newli.appendChild(newlink);
console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);

// => Replace Element
// replaceChild(new,old)
// =====================

const newtitleh2 = document.createElement("h2");
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My Lists");
newtitleh2.appendChild(newcaption);
// newtitleh2.appendChild(document.createTextNode("all my lists"));
// console.log(newtitleh2);

// const oldtitleh4 = document.querySelector("h4#tasktitle");
const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);

const getcardaction = document.querySelector("div.card-action");
// console.log(getcardaction);

getcardaction.replaceChild(newtitleh2, oldtitleh4);
newtitleh2.style.textAlign = "center";
// newtitleh2.style.letterSpacing = "3px";

// => Remove Element
// =================

const getlis = document.querySelectorAll("li");
// console.log(getlis); // =>NodeList(6)
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[2].remove();

// console.log(getlis); // =>NodeList(6)

// const getlis2 = document.querySelectorAll("li");
// console.log(getlis2); // => NodeList(4)

// => Remove Child Element
// =======================

const getfirtstul = document.querySelector("ul.list-group");
// console.log(getfirtstul);
// getfirtstul.remove();

// getfirtstul.removeChild(getfirtstul.children[0]);
// getfirtstul.removeChild(getlis[2]);
// getfirtstul.removeChild(getlis[5]);
// console.log(getfirtstul);

// --------------------------------------------
// 31 August
// =========

// => Attribute
// ============
const firstli = document.querySelector("li");
// console.log(firstli);
const firstliChild = firstli.children[0];
// console.log(firstliChild);
// console.log(firstliChild.id);
// console.log(firstliChild.href);
console.log(firstliChild.getAttribute("id"));
console.log(firstliChild.getAttribute("href"));
console.log(firstliChild.title); //iamtitle
console.log(firstliChild.alt); //undefined
console.log(firstliChild.getAttribute("title")); //iamtitle
console.log(firstliChild.getAttribute("alt"));
//iamalt

// firstliChild.href = "https://google.com";
// firstliChild.setAttribute("href", "https://google.com");

var hasatt = firstliChild.hasAttribute("href");
console.log(hasatt); //true
hasatt = firstliChild.hasAttribute("hay");
console.log(hasatt); //false

// => ClassName vs ClassList
// =========================

// console.log(firstliChild.className); //delete-item
// firstliChild.className = "delete-myself";
// firstliChild.className = "delete-item delelete-myself";
firstliChild.className = "delete-item delete-myself delete-ourselves";
// console.log(firstliChild.className);

// console.log(firstliChild.classList); // => DOMTokenList
// console.log(firstliChild.classList[0]); //delete-item
// console.log(firstliChild.classList[1]); //undefined

// firstliChild.classList.add("delete-myself");
// firstliChild.classList.add("delete-ourseleves");
// console.log(firstliChild.classList);

// firstliChild.classList.remove("delete-myself");
// firstliChild.classList.remove("delete-item");
// firstliChild.classList.remove("delete-item", "delete-ourselves");
// console.log(firstliChild.classList);

// => Check class value
// ====================
// console.log(firstliChild.className); //delete-item delelete-myself delete-ourselves
if (firstliChild.className === "delete-item delete-myself delete-ourselves") {
  console.log("Yes");
} else {
  console.log("No");
}

// console.log(firstliChild.classList); //DOMTokenList(3)
if (firstliChild.classList.contains("delete-myself")) {
  console.log("Yes");
} else {
  console.log("No");
}

// => AddEventListener("Event Type", callBackFunction(){})
// ==================================

const clearbtn = document.querySelector(".clear-tasks");

// Method1
// =======
// clearbtn.addEventListener("click", function (e) {
//   // console.log("hey");
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
// -------------------------------------------
//   // console.log(e); // => PointerEvent
//   // console.log(this); // => WindowsEvent
// });

// Method2
// =======
clearbtn.addEventListener("click", myclick);

function myclick(e) {
  e.preventDefault();
  // console.log("Hey, I'm Working");
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);

  // e.target.innerHTML = "Finished";

  // Coordinate Event = relative to the window
  // const clientx = e.clientX;
  // const clienty = e.clientY;
  // console.log(clientx, clienty);

  // Coordinate Event = relative to the element
  // const offsetx = e.offsetX;
  // const offsety = e.offsetY;
  // console.log(offsetx, offsety);

  // console.log(this);
}

// --------------------------------------------
// 4 September
// ===========

// => Mouse Event
// ==============

const clbtn = document.querySelector(".clear-tasks");

// Single click
// ------------
// clbtn.addEventListener("click", mouseeventtype);

// Double click
// ------------
// clbtn.addEventListener("dblclick", mouseeventtype);

// Mousedown
// ---------
// clbtn.addEventListener("mousedown", mouseeventtype);

// Mouseup
// -------
// clbtn.addEventListener("mouseup", mouseeventtype);

const card = document.querySelector("div.card");

// mouse enter
// -----------
// card.addEventListener("mouseenter", mouseeventtype);

// Mouse over
// ----------
// card.addEventListener("mouseover", mouseeventtype);

// Mouse out
// ----------
// card.addEventListener("mouseout", mouseeventtype);

// Mouse move
// ----------
// card.addEventListener("mousemove", mouseeventtype);

const headingh2 = document.querySelector("h2");

function mouseeventtype(e) {
  // console.log("I'm Working");
  // console.log(`Event type = ${e.type}`);
  // headingh2.textContent = `MouseX: ${e.clientX}, MouseY: ${e.clientY}`;
  // headingh2.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
  // document.body.style.backgroundColor =
  //   `rgba(${e.clientX},${e.clientY},${e.clientX},0.5)`;
  // document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.5)`;
}

const getform = document.querySelector("form");

// Submit
// ------
// getform.addEventListener("submit", inputeventtype);

// function inputeventtype(e) {
//   console.log(`Event type: ${e.type}`);

//   e.preventDefault();
// }

// --------------------------------------------
// 5 September
// ===========

// => Input Event
// ==============

const getinput = document.getElementById("task");
// keydown
// -------
// getinput.addEventListener("keydown", inputeventtype);

// keypress
// --------
// getinput.addEventListener("keypress", inputeventtype);

// keyup
// --------
// getinput.addEventListener("keyup", inputeventtype);

// input
// --------
// getinput.addEventListener("input", inputeventtype);

// focus
// --------
// getinput.addEventListener("focus", inputeventtype);

// blur
// --------
// getinput.addEventListener("blur", inputeventtype);

// cut
// --------
// getinput.addEventListener("cut", inputeventtype);

// paste
// --------
// getinput.addEventListener("paste", inputeventtype);

// function inputeventtype(e) {
//   console.log(`Event Type: ${e.type}`);

//   // console.log(getinput);

//   // console.log(this);
//   // console.log(e); // => KeyboardEvent
//   // console.log(e.target);

//   // console.log(getinput.value);
//   console.log(e.target.value);
//   // console.log(this.value);

//   // e.preventDefault();
// }

// => Event Bubbling
// =================
// document.querySelector(".card-title").addEventListener("click", () => {
//   console.log("I'm card-title");
// });

// document.querySelector(".card-content").addEventListener("click", () => {
//   console.log("I'm card-content");
// });

// document.querySelector(".card").addEventListener("click", () => {
//   console.log("I'm card");
// });

// => Event Delegation
// ===================
const getdeleteitem = document.querySelector(".delete-item");
// console.log(getdeleteitem);

// getdeleteitem.addEventListener("click", function (e) {
//   // console.log("I am delete Item");

//   console.log(e.target); // -> i tag
//   console.log(this); // -> a tag
// });

document.body.addEventListener("click", eventdeleg);

function eventdeleg(e) {
  // console.log("I am working");
  // console.log(e.target);
  // console.log(this);
  // console.log(e.target.className);
  //           i
  // if (e.target.className === "fas fa-trash-alt") {
  //   console.log("Hey Im a trash can");
  // }
  // console.log(e.target.parentElement);
  // console.log(e.target.parentElement.className);
  //          i  a
  // if (e.target.parentElement.className === "delete-item") {
  //   console.log("Hey Im a delete item by a tag");
  // }
  //          i  a
  // if (e.target.parentElement.classList.contains("delete-item")) {
  //   console.log("Hey Im a delete item by a tag");
  // }

  // --------------------------------------------
  // 5 September
  // ===========

  //          i  a
  if (e.target.parentElement.classList.contains("delete-item")) {
    // console.log("Hey Im a delete item by a tag");
    // i
    // e.target.remove();
    // i        a
    // e.target.parentElement.remove();
    // i        a             li
    // e.target.parentElement.parentElement.remove();
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // console.log("Hey, I'm working");

  const getnewtask = document.getElementById("task").value;
  // console.log(getnewtask);
  // localStorage.setItem("mytasks", getnewtask);

  let alltasks; // undefined

  if (localStorage.getItem("mytasks") === null) {
    // console.log("No value yet");
    // ----------------------------

    alltasks = [];
  } else {
    // console.log("Value already exists");
    // ------------------------------------

    // alltasks = localStorage.getItem("mytasks");
    // console.log(alltasks);
    // console.log(typeof alltasks); //string

    alltasks = JSON.parse(localStorage.getItem("mytasks"));
    // console.log(alltasks);
    // console.log(typeof alltasks); // object(array)
  }

  alltasks.push(getnewtask);
  // console.log(alltasks);

  localStorage.setItem("mytasks", JSON.stringify(alltasks));
});

// console.log(localStorage.getItem("mytasks"));
// console.log(typeof localStorage.getItem("mytasks")); //string

// console.log(JSON.parse(localStorage.getItem("mytasks")));
// console.log(typeof JSON.parse(localStorage.getItem("mytasks"))); //object(array)

getmytasks = JSON.parse(localStorage.getItem("mytasks"));

getmytasks.forEach(function (getmytask) {
  console.log(getmytask);
});
