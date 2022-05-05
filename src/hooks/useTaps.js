import { useState } from 'react';

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return; // useTabs를 사용할 때 두번째 매개변수를 주지 않거나, 두번째 매개변수가 매열이 아니라면 return(에러 페이지 뜨지 않게)
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
