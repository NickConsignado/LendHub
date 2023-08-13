import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function BorrowedList() {
  const [rows, setRows] = useState([]);
  const [borrowedby, setBorrowedBy] = useState('');
  const [borroweddate, setBorrowedDate] = useState('');
  const [returndate, setReturnDate] = useState('');
  const [nameofbook, setNameOfBook] = useState('');
 

  const addRow = () => {
    const newRow = { borrowedby, borroweddate, returndate, nameofbook };
    setRows([...rows, newRow]);

    setBorrowedBy('');
    setBorrowedDate('');
    setReturnDate('');
    setNameOfBook('');   
  };

  return (
    <>
    <NavBar />
      <div className="container table table-striped mt-5">
        <form className="form ">
        <div class="row g-3">
          <div class="col">
              <input type="text" className="form-control" placeholder="Name" aria-label="name" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Borrowed Date" aria-label="Borrowed Date" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Return Date" aria-label="Return Date" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Name Of Book" aria-label="Name Of Book" />
            </div>
            <button type="button" className="btn-add" onClick={addRow}>Add</button>  
          </div>     
        </form>
        <table className="table container table table-striped border mt-5">
          <thead>
            <tr>
              <th>Borrowed by</th>
              <th>Borrowed Date</th>
              <th>Return Date</th>
              <th>Name Of Book</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row}>
                <td>{row.borrowedBy}Wanda</td>
                <td>{row.borrowedDate}july, 10, 2023</td>
                <td>{row.returnDate}Aug, 10, 2023</td>
                <td>{row.nameOfBook}Harry Potter</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
    </>
  )
}

export default BorrowedList


 /* <div>
        <table className="container table table-dark mt-5">
          <thead>
              <tr>
                <th>Borrowed by</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
                <th>Name Of Book</th>
              </tr>
          </thead>
          <tbody >
            <tr>
              <td>Wanda</td>
              <td>06/08/2023</td>
              <td>07/09/2023</td>
              <td>Harry Potter</td>
            </tr>
            <tr>
              <td>Juan</td>
              <td>04/09/2023</td>
              <td>06/09/2023</td>
              <td>Harry Potter</td>
            </tr>
          </tbody> 
        </table>
      </div>*/

