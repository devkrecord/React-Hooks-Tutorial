import { useInput } from '../hooks/useInput';
const UseInput = () => {
  //const textValidator = (value) => !value.includes('@');
  const maxLen = (value) => value.length <= 10;
  const name = useInput('Mr.', maxLen);
  return (
    <div>
      <h2 className="subTitle">useInput</h2>
      <h4>글자 길이 최대 10</h4>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
