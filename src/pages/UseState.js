import { useState } from 'react';

const UseState = () => {
  // 첫번째 요소는 item 이란 이릅을 가진 value
  // 두번째 요소는 item의 값을 변경해주는 기능
  const [item, setItem] = useState(1); // 1은 첫번째 요소의 초기값
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h2 className="subTitle">useState</h2>
      <h3>Hello {item}</h3>
      <h4>Start editing to see some magic happen!</h4>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};

export default UseState;
