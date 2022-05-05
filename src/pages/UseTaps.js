import { useTabs } from '../hooks/useTaps';

const content = [
  {
    tab: 'Section 1',
    content: 'This is the content of the Section 1',
  },
  {
    tab: 'Section 2',
    content: 'This is the content of the Section 2',
  },
];

const UseTaps = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h2 className="subTitle">useTap</h2>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTaps;
