import Books from "../components/books";

function HomePage() {
  return (
    <>
    <div className="container mt-5 pt-5">
      <Books/>
      <hr />
      <Books/>
      <hr />
      <Books/>
    </div>

    </>
  );
}

export default HomePage;
