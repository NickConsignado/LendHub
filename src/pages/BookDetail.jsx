import { Toast } from "bootstrap"
import { useFormik } from "formik"
import { Link } from "react-router-dom"

function BookDetail () {
  const formik = useFormik({
    initialValues: {
      literaryAwards: '',
      setting: '',
      characters: '',
      pages: '',
      published: '',
      publisher: '',
    },
    onSubmit: (value) => {
      new Toast(document.getElementById('liveToast')).show() 
      console.log(value)
    }
  })
  
  
  return (
    <>
      {/* <div className="d-flex flex-column w-75 m-3 align-items-end">
        <Link to="/book" className="btn btn-primary">
        <i class="fa-solid fa-plus"></i>Book List
        </Link>
      </div> */}

      <div  className="d-flex flex-column align-items-center">
      <h4 className=" my-3">Book Details</h4>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
              <div className="toast-body">
               Successfully created book.
              </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        </div>
       <form onSubmit={formik.handleSubmit} className="w-50">
          <div className="mb-3 row">
            <label htmlFor="literaryAwards" className="form-label col-3">Literary Awards:</label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                id="literaryAwards"
                placeholder="Literary Awards"
                value={formik.values.title}
                onChange={formik.handleChange}
               />

            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="setting" className="form-label col-3">Setting: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                name="setting"
                placeholder="London, England (, 1991), Hogwarts School of Witchcraft and Wizardry (United Kingdom, 1991)"
               />           
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="characters" className="form-label col-3">Characters: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                id="characters"
                placeholder="Characters"  
               />  

            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="pages" className="form-label col-3">Pages: </label>
            <div className="col-9">
              <input type="number"
                className="form-control"
                id="pages"   
                placeholder="pages"
               />   
   
            </div>   
          </div>
          <div className="mb-3 row">
            <label htmlFor="published" className="form-label col-3">Published: </label>
            <div className="col-9">
              <input type="date"
                className="form-control"
                id="published"
                placeholder="published"  
               />  

            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="publisher" className="form-label col-3">Publisher: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                id="publisher"
                placeholder="Publisher"  
               />  

            </div>   
          </div>

        </form>
       </div>
    </>
  )
}

export default BookDetail