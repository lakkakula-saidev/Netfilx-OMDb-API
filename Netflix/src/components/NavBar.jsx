import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../src/assets/netflix_logo.png";
import "../styles/styles.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} id="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tv Shows
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Recently Added
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                KIDS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
                </svg>
              </a>
            </li>

            <li class="nav-item">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="./assets/avatar.png" id="avatar" />
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <img src="./assets/avatar.png" id="avatar-small" />
                        User
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Profiles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Account
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Signout Netflix
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
