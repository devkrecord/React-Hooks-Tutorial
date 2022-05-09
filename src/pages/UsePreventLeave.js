import { usePreventLeave } from '../hooks/usePreventLeave';

// usePreventLeave 은 훅이 아니지만 nice한 함수형 프로그래밍을 만드는 방법을 알 수 있다.
// usePreventLeave는 window창을 닫을 때 confirm창을 띄워 확인 받는 함수.
const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <h2 className="subTitle">usePreventLeave</h2>
      <h3>
        usePreventLeave는 훅이 아니지만 nice한 함수형 프로그래밍을 만드는 방법을
        알 수 있다.
      </h3>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </>
  );
};

export default UsePreventLeave;
