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
import UseNetwork from './pages/UseNetwork';
import UseScroll from './pages/UseScroll';
import UseFullscreen from './pages/UseFullscreen';
import UseNotification from './pages/UseNotification';
import UseAxios from './pages/UseAxios';

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
    'useNetwork',
    'useScroll',
    'useFullscreen',
    'useNotification',
    'useAxios',
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
          <Route path="/useNetwork" element={<UseNetwork />} />
          <Route path="/useScroll" element={<UseScroll />} />
          <Route path="/useFullscreen" element={<UseFullscreen />} />
          <Route path="/useNotification" element={<UseNotification />} />
          <Route path="/useAxios" element={<UseAxios />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
