import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
<<<<<<< Updated upstream
import SearchMovie from "./components/search";

const App = () => {
	return (
		<div>
			<NavBar />
			{/* <SearchMovie /> */}
		</div>
	);
=======
import "./styles/cardstyle.css";

import MovieComments from "./components/MovieComments";

const App = () => {
  return (
    <div>
      <NavBar />
      <MovieComments />
    </div>
  );
>>>>>>> Stashed changes
};

export default App;
