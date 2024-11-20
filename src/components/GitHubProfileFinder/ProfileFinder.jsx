import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsernameData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const resData = await res.json();
      if (resData) {
        console.log(resData);
        setUserData(resData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      <p>{error.message}</p>;
    }
  }

  useEffect(() => {
    fetchUsernameData();
  }, []);

  return (
    <div className="flex relative justify-center flex-col">
      {loading ? (
        <div className="bg-white absolute w-full h-full flex justify-center items-center">
          <span className="animate-spin border-4 border-sky-400 border-dashed rounded-full left-2/4 absolute m-auto z-10 h-12 w-12"></span>
        </div>
      ) : null}
      <div className="flex justify-center m-3">
        <input
          className="border-2 border-gray-900 border-solid  px-3 py-2 mr-2"
          type="text"
          placeholder="Type Username..."
          value={username}
          name="searchBar"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          className="bg-gray-900 text-white px-3 py-2 mr-2"
          onClick={() => {
            fetchUsernameData();
          }}
        >
          Search
        </button>
      </div>
      {userData ? <ProfileCard data={userData} /> : null}
    </div>
  );
};

export default ProfileFinder;
