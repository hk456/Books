// defining n stuff
const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector("dialog button");
const form = document.querySelector("form");
const content = document.getElementById("content");

// the array for the books
let myLibrary = [];

// attach the ID's of these ones manually here
// going through the HTML and adding the data onto here and ID onto there 
const books = content.children;
for(let el of books){
    if(el.classList.contains('add')){
        continue;
    }

    // get those name, author-name, reading-status(that's just... "Not Read" by default anw btw)
    const infoDiv = el.querySelector(".info");
    const name = infoDiv.querySelector(".name").textContent;
    const authorName = infoDiv.querySelector(".author").textContent;
    el.id = crypto.randomUUID();
    let book = new Book(el.id, name, authorName, "Not Read");
    myLibrary.push(book);
}

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
        <div class="trash">
          <svg viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </div>
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

// function for performing the deletion operation 
function deleteBook(bookId) {
    // get the element in the DOM using this ID



    // search through the library array for the bookId
    for(let i=0;i<myLibrary.length;i++){
        if(myLibrary[i].id == bookId){
            myLibrary.splice(i,i);
            break;
        }
    }
}

// dialog box and form submission functionality
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const bookName = data.get("book-name");
    const authorName = data.get("author-name");

    const fileInput = data.get("image-source"); 
    const relativePath = 'covers/${fileInput.name}';

    const book = new Book(bookName, authorName, relativePath, "Not Read");
    addBookToLibrary(book);
    dialog.close();
});

// delete button functionality in only the parent element of it all...
content.addEventListener('click', (e) => {
    // check if the button clicked inside the content element is the trash button
    const trashBtn = e.target.closest('.trash');

    // if this is true
    if(trashBtn){
        // get the book Id
        const bookCard = trashBtn.closest('.book');
        const bookId = bookCard.getAttribute('data-id');

        // perform the deletion operation
        deleteBook(bookId);
    }
});