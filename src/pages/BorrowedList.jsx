import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function BorrowedList() {
  const dispatch = useDispatch()
  const borrowedLists = useSelector(state => state.borrowedLists)


  const [items, setItems] = useState([]);
  const [borrowedBy, setBorrowedBy] = useState("");
  const [borrowedDate, setBorrowedDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [nameOfBook, setNameOfBook] = useState("");

  const addItem = () => {
    if (borrowedBy.trim() !== "" && borrowedDate.trim() !== "" && returnDate.trim() !== "" && nameOfBook.trim() !== "") {
      const newItem = {
        borrowedBy: borrowedBy,
        borrowedDate: borrowedDate,
        returnDate: returnDate,
        nameOfBook: nameOfBook,
      };
      setItems([...items, newItem]);
      resetForm();
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const resetForm = () => {
    setBorrowedBy("");
    setBorrowedDate("");
    setReturnDate("");
    setNameOfBook("");
  };

  return (
    <div className="App">
      <div className="container table table-striped mt-5">
        <h1>Borrowed Items List</h1>
        <div className="form-group">
          <label>Borrowed By</label>
          <input
            type="text"
            className="form-control"
            value={borrowedBy}
            onChange={(e) => setBorrowedBy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Borrowed Date</label>
          <input
            type="date"
            className="form-control"
            value={borrowedDate}
            onChange={(e) => setBorrowedDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input
            type="date"
            className="form-control"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name of Book</label>
          <input
            type="text"
            className="form-control"
            value={nameOfBook}
            onChange={(e) => setNameOfBook(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addItem}>
          Add Item
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Borrowed By</th>
              <th>Borrowed Date</th>
              <th>Return Date</th>
              <th>Name of Book</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.borrowedBy}</td>
                <td>{item.borrowedDate}</td>
                <td>{item.returnDate}</td>
                <td>{item.nameOfBook}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BorrowedList;
