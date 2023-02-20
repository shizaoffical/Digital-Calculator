import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/header-logo.png"

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (

    <div>
      {show ? <div className=' nav-search-btn-div me-auto'  >
        <div className=' container nav-search-btn d-flex w-100 align-items-center'>
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#F7941D", fontSize: "1.6rem" }}></i>
          <input type="text" className='w-100 px-2 ' style={{ outline: "none", border: "none", backgroundColor: "none" }} />
          <i class="fa-solid fa-xmark" onClick={() => setShow(false)}
            style={{ border: "none", fontSize: "1.6rem", color: "white", backgroundColor: "none " }}> </i>
        </div></div> : null}
      <nav class=" navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <Link class="navbar-brand" to="/"><img src={logo} alt="" /> Digital Calculator</Link>
          {/* search btn */}

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars" ></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
              <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/Graphics">Graphics</Link></li>
              <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/Chemistry">Chemistry</Link></li>
              <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/Physics">Physics</Link></li>
              <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/Math">Math</Link></li>
              {/* <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/Others">Others</Link></li> */}
              <li class="nav-item dropdown text-light">
          <Link class="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="/Health">Health</Link></li>
                  <li><Link class="dropdown-item" to="/Unit">Unit</Link></li>
                  <li><Link class="dropdown-item" to="/Fun">Fun</Link></li>
                  <li><Link class="dropdown-item" to="/Love">Love</Link></li>
                  <li><Link class="dropdown-item" to="/Weather">Weather</Link></li>
                  <li><Link class="dropdown-item" to="/Sports">Sports</Link></li>
                  <li><Link class="dropdown-item" to="/Engineering">Engineering</Link></li>
                  <li><Link class="dropdown-item" to="/Financial">Financial</Link></li>
                  <li><Link class="dropdown-item" to="/Currency">Currency</Link></li>
          </ul>
        </li>
              {/* <div class="dropdown">
                <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  others
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                 
                </ul>
              </div> */}
            </ul>
            <form class="d-flex" role="search">
              <i class="fa-solid fa-magnifying-glass " onClick={() => setShow(true)} style={{ color: "#F7941D", fontSize: "1.6rem" }}></i>
            </form>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar