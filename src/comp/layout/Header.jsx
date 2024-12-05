
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <center>
      <nav className="navbar navbar-expand-lg text-black">
        <div className="container mt-3 mb-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ViewUser">
                  View
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="#"
                 
                >
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/single-blog">
                      Single Blog
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Formlocal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </center>
  );
};

export default Header;
