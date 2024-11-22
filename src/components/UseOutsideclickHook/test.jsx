import React, { useRef, useState, useEffect } from "react";
import UseOutsideHook from ".";

const OutsideClickHookTest = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  UseOutsideHook(ref, () => setShowModal(false));

  return (
    <div className="flex justify-center items-center m-5 ">
      {showModal ? (
        <div
          ref={ref}
          className="flex justify-center items-center flex-col p-5 rounded bg-slate-500 w-2/3"
        >
          <h1>Hello This is UseOutsideClickHook</h1>
          <p>
            Click outside to Close this window if you click on this head and
            paragraph window will not close
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setShowModal(true)}
            className="py-2 px-3 bg-black text-white rounded m-4"
          >
            Show Modal
          </button>
        </div>
      )}
    </div>
  );
};
export default OutsideClickHookTest;
