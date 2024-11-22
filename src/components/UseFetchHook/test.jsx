import React from "react";
import useFetch from ".";

const UseFetchHookTest = () => {
  const [pending, data, errorMsg] = useFetch(
    "https://dummyjson.com/products?limit=30",
    {}
  );
  //   console.log(pending , data, errorMsg);

  return (
    <div>
      {pending ? (
        <div className="bg-white absolute w-full h-full flex justify-center items-center">
          <span className="animate-spin border-4 border-sky-400 border-dashed rounded-full left-2/4 absolute m-auto z-10 h-12 w-12"></span>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold p-4">UseFetch Hook</h1>
          {data && data.products && data.products.length ? (
            data.products.map((item, index) => <p key={index}>{item.title}</p>)
          ) : (
            <h1>NO Data Found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default UseFetchHookTest;
