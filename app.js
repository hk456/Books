// the array for the books
let myLibrary = [];

// some default additions of objects into the array
book1 = new Book(crypto.randomUUID(), "Tokyo Ghoul", "Sui Ishida", "Not Read");
book2 = new Book(crypto.randomUUID(), "Fire Punch", "Tatatsuki Fujimoto", "Not Read");
book3 = new Book(crypto.randomUUID(), "Blue Box", "Kouji Miura", "Not Read");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// the constructor for the books
function Book(id, name, authorName, readingStatus) {
    if(!new.target){
        throw Error(`Must use the new operator to call the function`);
    }
    this.id = id;
    this.name = name;
    this.authorName = authorName;
    this.readingStatus = readingStatus;
}

// method for changing the reading status 
Book.prototype.changeReadStatus = function(readingStatus) {
    this.readingStatus = readingStatus;    
}

// function for taking in params, creating a book obj to then storing it in the array...
function addBookToLibrary(obj) {
    myLibrary.push(obj);
}


// first lets read our current html to add objects to our array 
// then clear it all in the html
// then loop through our array to then render it all on the html 
// then keep an eye on the event listeners of each book, and do action of addition and deletion of the book accordingly 
// then we go back in our game loop to rendering all the things back again... but i dont want this to be a loop... i want to attach the required functions that will implement the change of re-rendering when any such actions are performed

// add event listeners to all the current books in our book list

