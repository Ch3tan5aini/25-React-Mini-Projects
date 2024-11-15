import { useState } from "react";

export default function CustomTabs({ tabsContent = [], onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleChange(currentTabIndex) {
    setCurrentTabIndex(currentTabIndex);
    onChange(currentTabIndex);
    console.log(currentTabIndex);
  }
  console.log(tabsContent);


  return (
    <div className="wrapper">
      <div className="tabs text-black">
        {tabsContent.map((Content, index) => (
          <span className={currentTabIndex === index ? "cursor-pointer p-3 bg-green-600" : "cursor-pointer p-3 bg-purple-600"}  key={Content.label} onClick={() => handleChange(index)}>
            {Content.label}
          </span>
        ))}
        <div className="tabsContent m-5">
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].Content}
        </div>
      </div>
    </div>
  );
}
