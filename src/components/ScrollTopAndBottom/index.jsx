import React, { useRef } from "react";
import useFetch from "../UseFetchHook";

const ScrollTopAndBottom = () => {
  const [pending, data, errorMsg] = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  console.log(pending, data, errorMsg);

  return (
    <div className="text-center">
      {pending ? (
        <div className="bg-white absolute w-full h-full flex justify-center items-center">
          <span className="animate-spin border-4 border-sky-400 border-dashed rounded-full left-2/4 absolute m-auto z-10 h-12 w-12"></span>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-3xl">Scroll To Top And Bottom</h1>
          <h2 className="font-semibold text-2xl">This is the Top</h2>
          <button
            className="py-3 px-4 bg-black rounded text-white m-3"
            onClick={handleScrollToBottom}
          >
            Scroll To Bottom
          </button>

          <ul>
            {data && data.products && data.products.length
              ? data.products.map((product, index) => (
                  <li key={index}>{product.title}</li>
                ))
              : null}
          </ul>
          <button
            className="py-3 px-4 bg-black rounded text-white m-3"
            onClick={handleScrollToTop}
          >
            Scroll To Top
          </button>
          <h1 className="font-bold text-3xl" ref={bottomRef}>
            This is The Bottom
          </h1>
        </div>
      )}
    </div>
  );
};

export default ScrollTopAndBottom;
