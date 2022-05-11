import { useNetwork } from '../hooks/useNetwork';

// useNetwork는 navigator가 online또는 offline일 때 작동하는 hooks
const UseNetwork = () => {
  // 실행하는 change 함수
  const hanldeNetworkChange = (online) => {
    console.log(online ? "It's Online state" : "It's Offline state");
  };
  const online = useNetwork(hanldeNetworkChange);
  return (
    <>
      <h2 className="subTitle">useNetwork</h2>
      <h3>{online ? 'Online' : 'Offline'} </h3>
      <br />
      <p>
        Welcome~ 콘솔 네트워크에서 Online 또는 Offline으로 상태를 바꿔보세요
      </p>
    </>
  );
};

export default UseNetwork;
