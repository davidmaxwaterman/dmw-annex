import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import DmwAnnexHomePage from './DmwAnnexHomePage';
import DmwAnnexAboutPage from './DmwAnnexAboutPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<DmwAnnexHomePage />}
          />
          <Route
            path="/about"
            element={<DmwAnnexAboutPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
