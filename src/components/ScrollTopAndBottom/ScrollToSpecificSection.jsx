import React, { useRef } from "react";

const ScrollToSpecificSection = () => {
  const sectionRef = useRef(null);
  const data = [
    {
      label: "Section 1",
      styles: {
        width: "100%",
        height: "620px",
        backgroundColor: "red",
      },
    },
    {
      label: "Section 2",
      styles: {
        width: "100%",
        height: "620px",
        backgroundColor: "blue",
      },
    },
    {
      label: "Section 3",
      styles: {
        width: "100%",
        height: "620px",
        backgroundColor: "pink",
      },
    },
    {
      label: "Section 4",
      styles: {
        width: "100%",
        height: "620px",
        backgroundColor: "orange",
      },
    },
    {
      label: "Section 5",
      styles: {
        width: "100%",
        height: "620px",
        backgroundColor: "purple",
      },
    },
  ];

  function handleScrollClick() {
    const sectionPosition = sectionRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: sectionPosition,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="text-center">
      <h1>Scroll To Specific Section</h1>
      <button className="m-2 border border-black border-2 px-3 rounded" onClick={handleScrollClick}>Scroll</button>
      {data && data.length
        ? data.map((section, index) => (
            <div key={index} ref={index === 3 ? sectionRef : null} style={section.styles}>
              <h1>{section.label}</h1>
            </div>
          ))
        : null}
    </div>
  );
};

export default ScrollToSpecificSection;
