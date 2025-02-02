import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import "./App.css";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { User } from "./interfaces";
import { addUser, setUsers } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>();
  const users = useSelector((state: RootState) => state.users.users);
  console.log(users, "users");
  const setUserData = (e: MouseEvent<HTMLButtonElement>) => {
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
    <>
      {users &&
        users.map((user: User) => {
          return (
            <>
              <div>Name : {user?.name}</div>
              <div>Email : {user?.email}</div>
              <div>City : {user?.city}</div>
              <div>Id : {user?.id}</div>
            </>
          );
        })}

      <button onClick={setUserData}>Set User</button>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
