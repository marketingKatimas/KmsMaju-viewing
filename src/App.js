import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './pages/home1';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;