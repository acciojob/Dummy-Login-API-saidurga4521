import React from "react";
import "./../styles/App.css";
import { useState } from "react";
const data = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];
const App = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [enable1, setEnable1] = useState(false);
  const [enable2, setEnable2] = useState(false);
  const handleEmailChange = (e) => {
    setInput(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const user = data.find(
      (user) => input === user.email && password === user.password
    );
    if (!user) {
      let emailExists = data.some((user) => user.email === input);
      setEnable1(!emailExists);
      setEnable2(emailExists);
      setTimeout(() => {
        console.log("Please check your credentials");
      }, 3000);
    } else {
      setEnable1(false);
      setEnable2(false);
      setTimeout(() => {
        console.log(data);
      }, 3000);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          id="input-email"
          value={input}
          onChange={handleEmailChange}
        />
        {enable1 && <p id="user-error">User not found</p>}
        <br />
        <input
          type="Password"
          id="input-password"
          value={password}
          onChange={handlePasswordChange}
        />
        {enable2 && (
          <p style={{ color: "red" }} id="password-error">
            Password Incorrect
          </p>
        )}
        <br />
        <button id="submit-form-btn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
