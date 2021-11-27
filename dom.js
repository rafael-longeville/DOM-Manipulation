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

console.log(document.getElementById('header-title'))

// We can also store it into a var and log it 

var headerTitle = document.getElementById('header-title')

console.log(headerTitle)

//MODIFY TEXT 

//This method doesn't replace the h1 tag but it insert a new tag into the parent 

headerTitle.innerHTML = '<h3>Hello</h3>'

// We will see later how to replace into



