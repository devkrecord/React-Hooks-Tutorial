import { useFullscreen } from '../hooks/useFullscreen';
import bg from '../img/bg.jpg';

/*

리액트에서 웹 링크 이미지 url을 입력한 경우 이미지가 정상적으로 보이지만,
local에 저장되어있는 image를 불러오면 정상적으로 보이지 않는 문제가 있다.


주로 사용하는 2가지 방법이 있다.

1. public 디렉토리의 모든 것이 서버로 복사됩니다. public 폴더 안에 이미지를 저장하고 이미지를 불러온다.
2. src 아래의 모든 것이 JS 파일로 가져오는 것이 타당한 파일들이다. import 하여 불러온다.



*/
const UseFullscreen = () => {
  const onFullS = (isFull) => {
    // callback 함수
    console.log(isFull ? 'Full' : 'Small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <h2 className="subTitle">useFullscreen</h2>
      <div ref={element}>
        <button onClick={exitFull}>exitFull</button>
        <button onClick={triggerFull}>triggerFull</button>
        <img src={bg} alt="bg" />
      </div>
    </div>
  );
};

export default UseFullscreen;
