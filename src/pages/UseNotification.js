import { useNotification } from '../hooks/useNotification';

const UseNotification = () => {
  const triggerNotif = useNotification('Can I steal your kimchi', {
    body: 'I love kimchi dont you',
  });
  return (
    <>
      <h2 className="subTitle">UseNotification</h2>
      <button onClick={triggerNotif}>Hello</button>
      <br />
      <p>맥에서 알림 안 올 때 시스템 환경설정 -> 알림 -> Chrome 알림 켜기</p>
    </>
  );
};

export default UseNotification;
