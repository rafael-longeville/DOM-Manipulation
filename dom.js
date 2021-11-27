//Examine the Document Object

// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

//GET ELEMENT BY ID

console.log(document.getElementById("header-title"));

// We can also store it into a var and log it

var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headerTitle);

//MODIFY TEXT

//This method doesn't replace the h1 tag but it insert a new tag into the parent

headerTitle.innerHTML = "<h3>Hello</h3>";

// We will see later how to replace into

// CHANGE THE STYLE WITH JS

//Even if the property is border-bottom, we'll have to use CamelCase

header.style.borderBottom = "solid 3px #000";

// GET ELEMENT'S' BY CLASSNAME //
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);

// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4"; //This does'nt work //

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4f4";
// }

// GET ELEMENT BY TAG NAME

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);

li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "#f4f4f4"; //This does'nt work //

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "yellow";
}
