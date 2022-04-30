import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import UseEffect from './pages/UseEffect';
import UseState from './pages/UseState';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">실전형 리액트 Hooks 10개</h1>
      <ul className="nav">
        <li>
          <Link to="/useState"> useState 소개</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect 소개</Link>
        </li>
      </ul>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/useState" />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
