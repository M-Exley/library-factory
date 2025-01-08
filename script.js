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


(function UpdateLibrary (title, author, pages, read) {
        // display books already in array {if}
        const checkUI = function()  {    
        if (bookLibrary.length) { 
        bookLibrary.forEach((book) => {
        const {title, author, pages, read} = book;
        const resString = `${title}, by ${author} is ${pages} pages long. ${read} `
        const newCardDiv = document.createElement('div');
        cards.append(newCardDiv);
        newCardDiv.classList.add('card');
        newCardDiv.textContent = resString;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete Book'
        newCardDiv.append(deleteButton);
            
        deleteButton.addEventListener('click', function() {
            const parent = deleteButton.parentNode;
            const toString = parent.textContent.split(',')[0]; // works
           
            for(let i = 0; i < bookLibrary.length; i++) {
                const returnTitle = bookLibrary[i].title.toString();                
                
                if (toString === returnTitle) {                    
                    const toStringIndex = bookLibrary.findIndex(book => book.title === toString);
                
                    if (toStringIndex !== -1) {
                        console.log(`Removing: ${toString}`);
                        bookLibrary.splice(toStringIndex, 1); 
                        parent?.remove(); 
                    } else {
                        console.warn(`Title not found: ${toString}`);
                    }
                }
                
            }
            })

        })

            
         {
        }}  
        
    };
        checkUI();

    // add new books > update UI each time
    const add = document.getElementById('add');
    add.addEventListener('click', function(e) {
        const titleInput = document.getElementById('title').value;
        const authorInput = document.getElementById('author').value;
        const pagesInput = Number(document.getElementById('pages').value);
        const readInput = document.querySelector('input[name="read"]:checked').value;
        e.preventDefault();
        
        (!titleInput || !authorInput)  ?  alert('enter details') :

        title = titleInput;
        author = authorInput;
        pages = pagesInput;
        read = readInput;
        
        const newBookObject = {title, author, pages, read}
        console.log(`Adding: ${title}`);
        bookLibrary.push(newBookObject)
        console.table(bookLibrary);
        cards.replaceChildren()
        UpdateLibrary();
        form.reset();


        // if (!titleInput  && !authorInput)
          
        //   {
        //     console.log('enter details')}
        //   else {
        //   }

        })
        

        const clearLibrary = document.getElementById('clear')
        clearLibrary.addEventListener('click', function() {
            bookLibrary = [];
            cards.textContent = 'No books'
            checkUI();
        })

       
      
})();


  