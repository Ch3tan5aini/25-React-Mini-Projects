import CustomTabs from ".";

export default function TestTabs() {
  function RandomContent() {
    return <h2>Hello This is Random Content</h2>;
  }

  const tabs = [
    {
      label: "Tab 1",
      Content: <div>"The is Tab One's Content"</div>,
    },
    {
      label: "Tab 2",
      Content: <div>"The is Tab Two's Content"</div>,
    },
    {
      label: "Tab 3",
      Content: <RandomContent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <CustomTabs tabsContent={tabs} onChange={handleChange} />;
}
