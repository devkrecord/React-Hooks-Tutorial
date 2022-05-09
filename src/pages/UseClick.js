import { useClick } from '../hooks/useClick';

const UseClick = () => {
  const sayHello = () => console.log('sayHello');
  const title = useClick(sayHello);
  return (
    <>
      <h2 className="subTitle">useClick</h2>
      <h3 ref={title}>Hi</h3>
    </>
  );
};

export default UseClick;
