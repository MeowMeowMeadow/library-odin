let myLibrary = [
    {
        title:"A Game of Thrones",
        author: "George R. R. Martin",
        pages: "694",
        readStatus: false
    }
];

function Book(title, author, pages, readStatus)
{
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBooktoLibrary()
{

}

function displayLibrary()
{

}

function displayForm()
{
    document.getElementById("bookForm").classList.remove('hidden');
}

function hideForm()
{
    document.getElementById("addBook").classList.add('hidden');
}
