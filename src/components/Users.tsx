import React from "react";
import { useEffect } from "react";

import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../interfaces";
import { addUser, setUsers } from "../features/userSlice";
function Users() {
  const dispatch = useDispatch();
  // const [user, setUser] = useState<User | null>();
  const users = useSelector((state: RootState) => state.users.users);
  console.log(users, "users");
  const setUserData = () => {
    dispatch(addUser());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUsers(data));
      });
  }, []);

  return (
    <div>
      {" "}
      {users &&
        users.map((user: User) => {
          return (
            <>
              <div className="text-red">Name : {user?.name}</div>
              <div>Email : {user?.email}</div>
              <div>City : {user?.city}</div>
              <div>Id : {user?.id}</div>
            </>
          );
        })}
      <button onClick={setUserData}>Set User</button>
    </div>
  );
}

export default Users;
