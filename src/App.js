import './App.css';
import NavBar from './component/header/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import News from './pages/News';
import Sport from './pages/Sport';
import Reel from './pages/Reel';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Sport />} path="/sport" />
        <Route element={<News />} path="/news" />  
        <Route element={<Reel />} path="/reel" />
      </Routes>
    </Router>
    </>
  );
}

export default App;
