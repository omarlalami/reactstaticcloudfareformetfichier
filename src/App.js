import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Telechargement from './pages/Telechargement';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/telechargement">Téléchargement</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/telechargement" element={<Telechargement />} />
      </Routes>
    </Router>
  );
}

export default App;
