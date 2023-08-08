import BookDetails from "../components/BookDetails";
import NavBar from "../components/NavBar.jsx";

function HomePage() {
  return (
    <>
      <NavBar />

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2">
            <div
              className="card"
              style={{
                height: "100rem",
                width: "auto",
                marginTop: "90px",
                paddingTop: "50px",
              }}
            ></div>
          </div>
          <div className="container col-10 mt-5 pt-5">
            <BookDetails />
            <hr />
            <BookDetails />
            <hr />
            <BookDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;