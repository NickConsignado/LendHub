import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center text-align-center align-item-center mt-5">
            <small>@2023 LendHub</small><br /><br />
        </div>
        <div className="d-flex justify-content-center text-align-center align-item-center">         
            <p>Used API: <span className="text-decoration-underline">Book Borrowing REST API</span></p>               
        </div>
        <div className="d-flex justify-content-center text-align-center align-item-center">
            <p>Develop by:</p>
        </div>   
        <div className="d-flex justify-content-center text-align-center align-item-center">        
            <p>Nick Ilano Consignado <i class="fa-solid fa-minus fa-rotate-90"></i>
            Banez Ederick Salcela</p>               
        </div> 
        <div className="d-flex justify-content-center text-align-center align-item-center">
            <p>Mark Dave Seneres</p>             
        </div>  
        <br />
        <div className="d-flex justify-content-center text-align-center align-item-center py-2">
          <i class="fa-brands fa-github fa-xl"></i>
          <i class="fa-brands fa-linkedin fa-xl"></i>
        </div>      
      </div>                        
    </>
  )
}

export default Footer;