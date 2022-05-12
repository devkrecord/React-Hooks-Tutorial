import { useFullscreen } from '../hooks/useFullscreen';
const UseFullscreen = () => {
  const onFullS = (isFull) => {
    // callback 함수
    console.log(isFull ? 'Full' : 'Small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <>
      <h2 className="subTitle">useFullscreen</h2>
      <div ref={element}>
        <img
          src="https://github.com/devkrecord/React-Hooks-Tutorial/blob/master/src/img/bg.jpg"
          alt="bg"
        />
        <button onClick={exitFull}>exitFull</button>
        <button onClick={triggerFull}>triggerFull</button>
      </div>
    </>
  );
};

export default UseFullscreen;
