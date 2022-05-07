import { useTitle } from '../hooks/useTitle';

const UseTitle = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('useTitle'), 3000);
  return (
    <div>
      <h2 className="subTitle">useTitle</h2>
      <br />
      <p>3초뒤 title이 Loading에서 useTitle로 변경된다</p>
    </div>
  );
};

export default UseTitle;
