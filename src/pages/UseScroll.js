import { useScroll } from '../hooks/useScroll';
const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: '200vh' }}>
      <h2
        className="subTitle"
        style={{
          position: 'fixed',
          width: '100%',
          textAlign: 'center',
          color: y > 100 ? 'red' : 'blue',
        }}
      >
        useScroll
      </h2>
      <br />
      <p>사용자가 스크롤 이용시 useScroll 실행</p>
    </div>
  );
};

export default UseScroll;
