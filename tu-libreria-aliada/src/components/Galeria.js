import BookCard from "./BookCard";
function Galeria({bookList}) {

  renderBooks = () => {
    return bookList.map((book) => {
       <BookCard desc={book.description}/>
    })
    }
}
  return (
    <div className="container">
      <div className="row">
            <div className="col-6">
                {/*renderBooks()*/}
                <BookCard/>
            </div>
            <div className="col-6">

            </div>
      </div>
      </div>
  );
}
export default Galeria;
