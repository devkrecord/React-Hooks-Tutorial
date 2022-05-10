import { useBeforeLeave } from '../hooks/useBeforeLeave';
const UseBeforeLeave = () => {
  const dontLeave = () => console.log('Plz dont leave');
  useBeforeLeave(dontLeave);
  return (
    <>
      <h2 className="subTitle">useBeforeLeave</h2>
      <h3>Hi</h3>
      <p>사용자의 마우스가 브라우저를 벗어나 위쪽으로 가면 console.log 실행</p>
    </>
  );
};

export default UseBeforeLeave;
