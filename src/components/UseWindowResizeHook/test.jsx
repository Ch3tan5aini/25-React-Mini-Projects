import React from "react";
import UseWindowResizeHook from ".";

const UseWindowResizeHookTest = () => {
  const windowSize = UseWindowResizeHook();

  let { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Window Width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  );
};

export default UseWindowResizeHookTest;
