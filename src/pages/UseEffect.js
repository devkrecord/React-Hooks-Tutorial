import { useEffect, useState } from 'react';

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);
  const sayHello = () => console.log('hello');
  /*
    useEffect(function[, deps])
    - function : 수행시키고자 하는 작업
    - deps : 상태 변경을 감지하고자 하는 값이 들어가는 의존성 배열

    useEffect Hook은
    componentDidMount - 컴포넌트가 마운트된 직후,
    componentDidUpdate - 업데이트된 직후,
    componentWillUnmount - 컴포넌트가 마운트 해제되어 제거되기 직전에 실행된다.
  */
  useEffect(() => sayHello(), []);

  return (
    <div>
      <h2 className="subTitle">useEffect</h2>
      <h3>Hi</h3>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber - 1)}>{anumber}</button>
    </div>
  );
};

export default UseEffect;
