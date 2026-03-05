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


// add button functionality
const addBtn = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector("dialog button");

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", () => {
    dialog.close();
});

// delete button functionality in only the parent element of it all...
