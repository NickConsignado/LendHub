import axios from "axios";
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

  const addItem = async () => {

    try {
      const res = await axios.post('http://localhost:8000/api/v1/borrowings', {
       borrowedBy,
       borrowedDate,
       returnDate,
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      if (res.status === 200) {
        if (borrowedBy.trim() !== "" && borrowedDate.trim() !== "" && returnDate.trim() !== "" && nameOfBook.trim() !== "") {
          const newItem = {
            borrowedBy: borrowedBy,
            borrowedDate: borrowedDate,
            returnDate: returnDate,
            nameOfBook: nameOfBook,
          };
          setItems([...items, newItem]);
          resetForm('');
        }
      }
    } catch (err) {
     console.log('something went wrong');
      } 
  };

  const removeItem  = (index) => {
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
  <>
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
        <label>Books</label>
          <select className="form-select" defaultValue={nameOfBook} onChange={(e) => setNameOfBook(e.target.value)} aria-label="Default select example">
            <option selected>Romance, Drama, Comedy, adventure, horror</option>
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="3">4</option>
            <option defaultValue="3">5</option>
          </select>
          
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
  </>  
  );
}

export default BorrowedList;
