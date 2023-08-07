import { Link } from "react-router-dom";

function Books() {
  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <div className="d-flex">
          <Link to="/book-info"><img
            src="https://books.google.com.ph/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71tVxR9IQfoWdl-iigb-Q6saZzliugsXgsERljIFQp83Z46DMB6pdkYehy0zeFc4d8Q9RiUhs9mooPCcDSn3co2Tjz61vPyS8WgNcyWd5NLhW082OvTVBkYssG-rcXspshQO31A"
            className="card-img-top"
            alt="..."
            style={{ width: "10rem" }}
          /></Link>
          <div className="card-body">
            <h6 className="card-title">
              Harry Potter and the Sorcerer's Stone
            </h6>
            <p className="card-text"> J.K. Rowling</p>
            <p>
              Fantasy, Fiction, Classics
              Audiobook, Adventure, Science, Fiction and Fantasy
            </p>
            <p>Stocks: 3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
