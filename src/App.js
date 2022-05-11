import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import UseEffect from './pages/UseEffect';
import UseInput from './pages/UseInput';
import UseState from './pages/UseState';
import UseTaps from './pages/UseTaps';
import UseTitle from './pages/UseTitle';
import UseClick from './pages/UseClick';
import UseConfirm from './pages/UseConfirm';
import UseHover from './pages/UseHover';
import UsePreventLeave from './pages/UsePreventLeave';
import UseBeforeLeave from './pages/UseBeforeLeave';
import UseFadeIn from './pages/UseFadeIn';

const App = () => {
  const nav = [
    'useState',
    'useInput',
    'useTaps',
    'useEffect',
    'useTitle',
    'useClick',
    'useHover',
    'useConfirm',
    'usePreventLeave',
    'useBeforeLeave',
    'useFadeIn',
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
          <Route path="/useTaps" element={<UseTaps />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useTitle" element={<UseTitle />} />
          <Route path="/useClick" element={<UseClick />} />
          <Route path="/useHover" element={<UseHover />} />
          <Route path="/useConfirm" element={<UseConfirm />} />
          <Route path="/usePreventLeave" element={<UsePreventLeave />} />
          <Route path="/useBeforeLeave" element={<UseBeforeLeave />} />
          <Route path="/useFadeIn" element={<UseFadeIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
