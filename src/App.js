import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import DmwAnnexHomePage from './DmwAnnexHomePage';
import DmwAnnexAboutPage from './DmwAnnexAboutPage';

function App() {
  return (
    <Router>
      <div>
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
