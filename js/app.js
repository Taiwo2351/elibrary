//select all element of interest
let title = document.querySelector("#txtTitle");
let author = document.querySelector("#txtAuthor");
let isbn = document.querySelector("#txtIsbn");
let btn = document.querySelector("#btn");
let table= document.querySelector("#table");




btn.addEventListener("click", displayBook);

function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;

 
}

// checkInput = function(){
//   if (txtTitle.value == "" || txtAuthor.value == "" || txtIsbn.value == "" ) {
//     return false;
//   }
//   return true; 
// }

function checkInput(){
  if (txtTitle.value == "" || txtAuthor.value == "" || txtIsbn.value == "" ) {
        return false;
      }
      return true; 
  }


function displayBook(){
  if (checkInput() == true){
     let title = txtTitle.value;
      let author = txtAuthor.value;
      let isbn = txtIsbn.value;
      const book = new Book (title, author, isbn);
      saveBook(book);   

      

  }else {
      
    display.innerHTML = "Empty fields are required" 
   
  }
  render();
}


function saveBook(bookObject){
  let booksArray = [];

  if (localStorage.getItem('books') == null){
      booksArray.push(bookObject);     
       
      localStorage.setItem ('books', JSON.stringify(
          booksArray));
     addedBook.innerHTML = "New book has been added"
  }else{
      booksArray = JSON.parse(localStorage.getItem("books"));

      booksArray.push(bookObject);
      localStorage.setItem('books', JSON.stringify(
          booksArray));
          
          addedBook.innerHTML = "New book has been added"
  }
}


function render(){
  if(localStorage.getItem('books') != null){
      let booksArray = JSON.parse (localStorage.getItem('books'));

      table.innerHTML = ""
      let tr = document.createElement("tr");
      tr.innerHTML = "<th>Title</th><th>Author</th><th>ISBN</th>";
      table.appendChild(tr);

      for (var i = 0; i < booksArray.length; i++){
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${booksArray[i].title}</td><td>${booksArray[i].author}</td><td>${booksArray[i].isbn}</td><td><button class="btn btn-danger">Delete</button></td>`;
        table.appendChild(tr);
      }
 
   } else{
    console.log("No books yet");
}
}

  