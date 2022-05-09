export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault(); // 단순히 html에서 표준으로 제공하는 태그의 기본 이벤트 발생을 막는 메서드
    event.returnValue = ''; // beforeunload 는 returnValue 를 요구함
  };
  // beforeunload 이벤트 리스너로 listener 지정, beforeunload는 window가 닫히기 전에 function이 실행되는 것을 허락한다.
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener); // beforeunload 이벤트 제거
  return { enablePrevent, disablePrevent }; // 두 함수를 return
};
