import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul className="flex flex-col justify-center items-center">
      {data && data.length ? (
        data.map((user, index) => (
          <li className="cursor-pointer" key={index} onClick={handleClick}>
            {user}
          </li>
        ))
      ) : (
        <p>NO Data Found!</p>
      )}
    </ul>
  );
};

export default Suggestions;
