import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
<center>
    <nav class="navbar navbar-expand-lg text-black" align="center">
  <div class="container mt-3 mb-5">
  <img src="src/assets/img/logo.png" alt="" className=' logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
          

        </li>
        <li class="nav-item dropdown ">
              <Link class="nav-link  dropbtn" to="/ViewUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          View
              </Link>
            </li>
             <li class="nav-item dropdown ">
              <Link class="nav-link  dropbtn" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Pages
              </Link>
              <ul class="dropdown-menu dropdown-content " >
              <li><a class="dropdown-item" To="#">Login</a></li>
                <li><a class="dropdown-item" To="#">Tracking</a></li>
                <li><a class="dropdown-item" To="#">Product Checkout</a></li>
                <li><a class="dropdown-item" To="#">Shopping Cart</a></li>
                <li><a class="dropdown-item" To="#">Confirmation</a></li>
                <li><a class="dropdown-item" To="#">Elements</a></li>



              </ul>
            </li>
            <li class="nav-item dropdown ">
              <Link class="nav-link dropbtn" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Blog
              </Link>
              <ul class="dropdown-menu dropdown-content text-white " >
                <li><a class="dropdown-item" To="#"> Blog</a></li>
                <li><a class="dropdown-item" To="#">Single Blog</a></li>
              </ul> 
            </li>
            
        <li class="nav-item ">
          <Link class="nav-link  "  to='/Formlocal'>Contact</Link>
        </li>
      </ul>
    </div>
    </div>
    
</nav>
<hr /></center>


  )
}

export default Header


