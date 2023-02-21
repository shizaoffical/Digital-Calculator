import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/header-logo.png"
// import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  // const location = useLocation();
  // const [searchText, setSearchText] = useState("");
  // const [matchResult, setMatchResult] = useState("/Love");
  
  //   const handleSearch = (event) => {
  //     event.preventDefault();
  //     const matches = location.pathname.match(searchText);
  //     if (matches) {
  //       setMatchResult(matches);
  //     } else {
  //       setMatchResult(null);
  //     }
  //   }
  
  return (

    <div>
      {show ?
        <div className=' nav-search-btn-div me-auto'  >
          <form className='sumbit container nav-search-btn d-flex w-100 align-items-center ' 
          // onSubmit={handleSearch}
          >
            {/* <i class="fa-solid fa-magnifying-glass" style={{ color: "#F7941D", fontSize: "1.6rem" }}></i> */}
            <input type="text" className='w-100 px-2 ' style={{ outline: "none", border: "none", backgroundColor: "none" }}
            // value={searchText} onChange={(event) => setSearchText(event.target.value)} 
            />

            <i className="fa-solid fa-xmark pe-3" onClick={() => setShow(false)}
              style={{ border: "none", fontSize: "1.6rem", color: "white", backgroundColor: "none " }}> </i>
          </form>
        </div>
        : null}
      <nav className=" navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={logo} alt="" /> Digital Calculator</Link>
          {/* search btn */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars" ></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Graphics">Graphics</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Chemistry">Chemistry</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Physics">Physics</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Math">Math</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Area">Area</Link></li>
            </ul>
            <form className="d-flex" role="search">
              <i className="fa-solid fa-magnifying-glass " onClick={() => setShow(true)} style={{ color: "#F7941D", fontSize: "1.6rem" }}></i>
            </form>
          </div>
        </div>

      </nav>
      {/* {matchResult && (
        <div>
          <p>Match found:</p>
          <p>{matchResult}</p>
          Add your own implementation here
        </div>
      )} */}
    </div>
  )
}

export default Navbar