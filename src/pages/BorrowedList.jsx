import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function BorrowedList() {
  const dispatch = useDispatch()
  const borrowedLists = useSelector(state => state.borrowedLists)

  const [borrowedBy, setBorrowedBy] = useState("");
  const [borrowedDate, setBorrowedDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [bookId, setBookId] = useState("");
  const [ Data, setData ] = useState([])

const fetchData = async () => {
  const res = await axios.get('http://localhost:8000/api/v1/borrowings');
   setData(res.data.data)
  
}

useEffect(() => {
  fetchData()
}, [setData])


  const addItem = async () => {

    try {
      const res = await axios.post('http://localhost:8000/api/v1/borrowings', {
       borrowedBy,
       borrowedDate,
       returnDate,
       bookId: bookId
        }, 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      if (res.status === 200) {
       
        setData([...Data, res.data.data])
        resetForm('');
        
      }
    } catch (err) {
     console.log('something went wrong');
      } 
  };

  const removeItem  = (index) => {
    const newData = Data.filter((_, i) => i !== index);
    setData(newData);
  };

  const resetForm = () => {
    setBorrowedBy("");
    setBorrowedDate("");
    setReturnDate("");
    setBookId("");
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
        <label>Books Id</label>
        <input
            type="text"
            className="form-control"
            value={bookId} 
            onChange={(e) => setBookId(e.target.value)} 
          />
        </div>
        <button className="btn btn-primary mt-1" onClick={addItem}>
          ADD
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Borrowed By</th>
              <th>Borrowed Date</th>
              <th>Return Date</th>
              <th>Book Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>   
        
           {
              Data.map((Data, index) => (
                <tr key={Data.id}>
                  <td>{Data.borrowedBy}</td>
                  <td>{Data.borrowedDate}</td>
                  <td>{Data.returnDate}</td>
                  <td>{Data.bookId}</td>
                  <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Delete
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
