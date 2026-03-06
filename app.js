// defining n stuff
const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector("dialog button");
const form = document.querySelector("form");
const content = document.getElementById("content");

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
function Book(id, name, authorName, imgSource, readingStatus) {
    if(!new.target){
        throw Error(`Must use the new operator to call the function`);
    }
    this.id = id;
    this.name = name;
    this.authorName = authorName;
    this.imgSource = imgSource;
    this.readingStatus = readingStatus;
}

// method for changing the reading status 
Book.prototype.changeReadStatus = function(readingStatus) {
    this.readingStatus = readingStatus;    
}

// function for taking in params, creating a book obj to then storing it in the array...
function addBookToLibrary(obj) {
    myLibrary.push(obj);

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `
        <img src="${obj.imgSource}" alt="book" class="cover-art">
        <div class="info">
            <div class="name">${obj.name}</div>
            <div class="author">${obj.authorName}</div>
            <div class="status">
            <label for="read-status">Read Status: </label>
            <select name="status" id="read-status">
                <option value="read">Read</option>
                <option value="not-read" selected>Not Read</option>
                <option value="reading">Reading</option>
            </select>
            </div>
        </div> 
    `;
    content.insertBefore(bookDiv, content.lastElementChild);
}

// dialog box and form submission functionality
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const bookName = data.get("book-name");
    const authorName = data.get("author-name");

    const fileInput = data.get("image-source");
    const relativePath = `covers/${fileInput.files[0].name}`;

    const book = new Book(bookName, authorName, relativePath, "Not Read");
    addBookToLibrary(book);
    dialog.close();
});


// delete button functionality in only the parent element of it all...
