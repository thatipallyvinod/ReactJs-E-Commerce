import { Link } from "react-router-dom";
import "./NavBar.css"; // Import your custom CSS file for navbar styling

function NavBar() {
  return (
    <div className="container">
      <nav className="fixed-top navbar navbar-expand-sm bg-dark navbar-dark custom-navbar">
        <Link className="navbar-brand" to="/">
          <i style={{ fontSize: "40px" }} className="bi bi-house-heart"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#div1"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="div1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-door" viewBox="0 0 20 20">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/Admin">Admin </Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to="/AllProducts">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ShoppingCart">Cart</Link>
            </li> 

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">Categories</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/ProductByCategory/Smart">Smart Watches</Link>
                <Link className="dropdown-item" to="/ProductByCategory/Classic">Classic Watches</Link>
              </div>
            </li>
            <li className="nav-item" style={{textAlign:"right"}}>
                <Link className="nav-link" to="/Login">Longin</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
