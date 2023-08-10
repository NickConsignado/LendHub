import React, { useState } from 'react';

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
      <div className="container table table-striped mt-5">
        <form className="form ">
          <button type="button" className="btn-add" onClick={addRow}>
            Add
          </button>
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
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.borrowedBy}Wanda</td>
                <td>{row.borrowedDate}Aug, 10, 2023</td>
                <td>{row.returnDate}</td>
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

