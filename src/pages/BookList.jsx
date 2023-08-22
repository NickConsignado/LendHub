import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Toast } from "bootstrap"
import axios from "axios"
import BookDetails from "./BookDetail"


function BookList() {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      descriptions: '',
      stocks: '',
      genre: '',
      thumbnail: '',  
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Book Name title is required"),
      author: Yup.string().required("Book Name author is required"),
      descriptions: Yup.string().required("Description of a book is required"),
      stocks: Yup.number().required("Number of Stocks is required"),
      genre: Yup.string().required("The genre is required"),
      thumbnail: Yup.string().required("Book Name photo is required"),
    }),
    onSubmit: async (value) => {
   console.log(value)
      try {
        const res = await axios.post('http://localhost:8000/api/v1/books', {
            title: value.title,
            author: value.author,
            subtitle: value.descriptions,
            stocks: value.stocks,
            genre: value.genre,
            thumbnail: document.getElementById('thumbnail').files[0]  
          },   

          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
         console.log(res.data)
          if (res.status === 200) {
            new Toast(document.getElementById('liveToast')).show()           
          }
      } catch (err) {
          // show error
        console.log('something went wrong')
      }   
    }
  })
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h4 className=" my-3">Book List</h4>
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
            <label htmlFor="title" className="form-label col-3">Book Name: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
               />
               {
                formik.errors.title && <span className="text-danger">{formik.errors.title}.</span>
               }
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="author" className="form-label col-3">Author: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                name="author"
                placeholder="Author"
                value={formik.values.author}
                onChange={formik.handleChange}
               />
                {
                 formik.errors.author && <span className="text-danger">{formik.errors.author}.</span>
                }
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="descriptions" className="form-label col-3">Descriptions: </label>
            <div className="col-9">
               <textarea id="descriptions" 
                  className="form-control"
                  rows="10" 
                  placeholder="Write descritions here..."
                  value={formik.values.descriptions}
                  onChange={formik.handleChange}
                >
                </textarea>  
                {
                 formik.errors.descriptions && <span className="text-danger">{formik.errors.descriptions}.</span>
                }
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="stocks" className="form-label col-3">Stocks: </label>
            <div className="col-9">
              <input type="number"
                className="form-control"
                id="stocks"
                placeholder="Stocks"  
                value={formik.values.stocks}
                onChange={formik.handleChange}    
               />  
               {
                formik.errors.stocks && <span className="text-danger">{formik.errors.stocks}</span>
               }   
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="genre" className="form-label col-3">Genre: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                name="genre"
                placeholder="Romance, Drama, Comedy, adventure, horror"    
                value={formik.values.genre}
                onChange={formik.handleChange}  
               />   
                {
                formik.errors.genre && <span className="text-danger">{formik.errors.genre}</span>
               }     
            </div>   
          </div>

          <div className="mb-3 row">
            <label htmlFor="thumbnail" className="form-label col-3">Photo: </label>
            <div className="col-9">
              <input type="file"
                className="form-control"
                id="thumbnail"
                accept="image/*" 
                value={formik.values.thumbnail}
                onChange={formik.handleChange}
               />
                {
                 formik.errors.thumbnail && <span className="text-danger">{formik.errors.thumbnail}.</span>
                }
            </div>   
          </div>
       
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-25">Create</button>
          </div>  
        </form>
      </div>
    </>
  )
}

export default BookList