import { useHover } from '../hooks/useHover';

const UseHover = () => {
  const sayHello = () => console.log('sayHello');
  const title = useHover(sayHello);
  return (
    <>
      <h2 className="subTitle">useHover</h2>
      <h3 ref={title}>Hi</h3>
    </>
  );
};

export default UseHover;
