import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import UseEffect from './pages/UseEffect';
import UseInput from './pages/UseInput';
import UseState from './pages/UseState';
import UseTaps from './pages/UseTaps';
import UseTitle from './pages/UseTitle';
import UseClick from './pages/UseClick';
import UseConfirm from './pages/UseConfirm';

const App = () => {
  const nav = [
    'useState',
    'useInput',
    'UseTaps',
    'useEffect',
    'useTitle',
    'useClick',
    'UseConfirm',
  ];

  return (
    <div className="App">
      <h1 className="title">실전형 리액트 Hooks 10개</h1>
      <ul className="nav">
        {nav.map((item) => (
          <li key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/useState" />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useInput" element={<UseInput />} />
          <Route path="/UseTaps" element={<UseTaps />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useTitle" element={<UseTitle />} />
          <Route path="/UseClick" element={<UseClick />} />
          <Route path="/UseConfirm" element={<UseConfirm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
