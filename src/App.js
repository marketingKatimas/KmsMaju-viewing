import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './pages/home1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
