import { useFadeIn } from '../hooks/useFadeIn';
const UseFadeIn = () => {
  const fadeInH3 = useFadeIn(3);
  const fadeInp = useFadeIn(3, 2); // duration, delay 옵션 추가
  return (
    <>
      <h2 className="subTitle">useFadeIn</h2>
      <h3 {...fadeInH3}>Hi</h3>
      <p {...fadeInp}>Fade In</p>
    </>
  );
};

export default UseFadeIn;
