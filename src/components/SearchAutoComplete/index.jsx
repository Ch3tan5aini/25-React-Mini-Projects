import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const userData = await response.json();

      if (userData && userData.users && userData.users.length) {
        setUsers(userData.users.map((user) => user.firstName));
        setLoading(false);
      }
      //   console.log(userData);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  function handleChange(event) {
    const query = event.target.value;
    setSearchParams(query);

    if (query.length > 1) {
      const filterUsers =
        users && users.length
          ? users.filter(
              (UserName) =>
                UserName.toLowerCase().indexOf(query.toLowerCase()) > -1
            )
          : [];
      setFilteredUsers(filterUsers);
      setShowDropDown(true);
    }
  }

  function handleClick(event) {
    setSearchParams(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers, showDropDown);

  return (
    <div>
      {loading ? (
        <div className="bg-white absolute w-full h-full flex justify-center items-center">
          <span className="animate-spin border-4 border-sky-400 border-dashed rounded-full left-2/4 absolute m-auto z-10 h-12 w-12"></span>
        </div>
      ) : (
        <div className="flex justify-center m-2">
          <input
            type="text"
            placeholder="Search User Here"
            className="py-1 px-2 border-black border-2 border-solid "
            onChange={handleChange}
            value={searchParams}
          />
        </div>
      )}
      {showDropDown ? (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      ) : null}
    </div>
  );
};

export default SearchAutoComplete;
