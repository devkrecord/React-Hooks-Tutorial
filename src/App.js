import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import UseEffect from './pages/UseEffect';
import UseInput from './pages/UseInput';
import UseState from './pages/UseState';
import UseTaps from './pages/UseTaps';
import UseTitle from './pages/UseTitle';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">실전형 리액트 Hooks 10개</h1>
      <ul className="nav">
        <li>
          <Link to="/useState"> useState</Link>
        </li>
        <li>
          <Link to="/useInput"> useInput</Link>
        </li>
        <li>
          <Link to="/useTaps"> useTaps</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/useTitle">useTitle</Link>
        </li>
      </ul>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/useState" />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useInput" element={<UseInput />} />
          <Route path="/UseTaps" element={<UseTaps />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useTitle" element={<UseTitle />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
