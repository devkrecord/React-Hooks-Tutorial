import { useEffect, useRef } from 'react';

export const useHover = (onHover) => {
  // 특정 element의 크기나 위치 등을 가져와 설정할 때 ref를 사용
  const element = useRef(); // 자바스크립트의 document.getElementById() 와 비슷

  useEffect(() => {
    if (typeof onHover !== 'function') {
      return;
    }
    // componentDidMount
    // element 존재 여부 확인
    if (element.current) {
      element.current.addEventListener('mouseenter', onHover); // click event 부여, hover 하면 sayhello 함수 실행
    }

    return () => {
      // componentWillUnmount 일 때 실행하는 부분
      if (element.current) {
        // eventListener 정리
        element.current.removeEventListener('mouseenter', onHover);
      }
    };
  }, []); // dependency 가 없기때문에 update는 고려하지 않아도 된다.
  return element;
};
