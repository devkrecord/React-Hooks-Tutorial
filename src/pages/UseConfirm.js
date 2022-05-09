import { useConfirm } from '../hooks/useConfirm';

// useConfirm 은 훅이 아니지만 nice한 함수형 프로그래밍을 만드는 방법을 알 수 있다.
const UseConfirm = () => {
  const deleteWorld = () => console.log('Deleting the world...');
  const abortWorld = () => console.log('Aborted');

  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abortWorld);
  return (
    <>
      <h2 className="subTitle">useConfirm</h2>
      <h3>
        useConfirm은 훅이 아니지만 nice한 함수형 프로그래밍을 만드는 방법을 알
        수 있다.
      </h3>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
};

export default UseConfirm;
