function SearchBar() {
  return (
    <>
      <div className="container text-center">
        <input
          className="border rounded-start col-lg-8"
          type="text"
          placeholder="Search..."
        />
        <button className="border rounded-end bg-primary text-secondary ">
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
