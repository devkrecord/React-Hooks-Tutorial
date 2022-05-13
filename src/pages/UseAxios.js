import { useAxios } from '../hooks/useAxios';

const UseAxios = () => {
  const options = {
    url: 'https://yts.mx/api/v2/list_movies.json', // example url
  };

  const { loading, data, refetch } = useAxios(options);
  console.log('data', data);
  return (
    <div className="App">
      <h2 className="subTitle">useAxios</h2>
      <h3>[ HTTP Statu ]</h3>
      <h3>{data && data.status}</h3>
      <h3>{loading && 'Loading'}</h3>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default UseAxios;
