'use strict'

let bookLibrary = [
    {
    title: 'History of England',
    author:'Lord Macauley',
    pages: 640,
    read: 'Read',
},
{
    title: 'The History of Violence',
    author:'Steven Pinker',
    pages: 740,
    read: 'Not read',
}, 
{
    title: 'The Pre-Raphaelite Tragedy',
    author:'William Gaunt',
    pages: 390,
    read: 'Read',
}];



// 1. Display books if there are any in the library

function UpdateLibrary (title, author, pages, read) {
    
        // display books already in array 
    if (bookLibrary.length) { 
        bookLibrary.forEach((book) => {
        // console.table(book.title)
        const {title, author, pages, read} = book;
        const resString = `${title}, by ${author} is ${pages} pages long. ${read}`
        // console.log(resString)
        // display book in DOM
        const newCardDiv = document.createElement('div');
        cards.append(newCardDiv);
        newCardDiv.classList.add('card');
        newCardDiv.textContent = resString;
        
            })
    } else {
        alert("no books in library")
    }

    // put DOM els into array and loop 
    const bookLibraryTouch = document.querySelectorAll('.card')
    const bookLibraryTouchArr = [...bookLibraryTouch];
    bookLibraryTouchArr.forEach((div) => {
    div.addEventListener('click', function() {
        div.remove();
        bookLibrary.splice(div, 1)
        console.table(bookLibrary)
    })
   })

    // add new books > update UI each time
    const add = document.getElementById('add');
    add.addEventListener('click', function(e) {
    e.preventDefault();
    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;
    const pagesInput = Number(document.getElementById('pages').value);
    const readInput = document.querySelector('input[name="read"]:checked').value;
    title = titleInput;
    author = authorInput;
    pages = pagesInput;
    read = readInput;

    
    
    bookLibrary.push(newBook)
    console.table(bookLibrary)
    
    })
}
UpdateLibrary();
