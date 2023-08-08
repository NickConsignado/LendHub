import BookDetails from "../components/BookDetails";

function HomePage() {
  return (
    <>
    <div className="container mt-5 pt-5">
      <BookDetails/>
      <hr />
      <BookDetails/>
      <hr />
      <BookDetails/>
    </div>

    </>
  );
}

export default HomePage;
