// import React from "react";
// import "./../styles/App.css";
// import { useState } from "react";
// const data = [
//   {
//     id: 1,
//     name: "ABC",
//     email: "abc@gmail.com",
//     password: "12",
//   },
//   {
//     id: 2,
//     name: "DEF",
//     email: "def@gmail.com",
//     password: "1234",
//   },
//   {
//     id: 3,
//     name: "GHI",
//     email: "ghi@gmail.com",
//     password: "123456",
//   },
// ];
// const App = () => {
//   const [input, setInput] = useState("");
//   const [password, setPassword] = useState("");
//   const [enable1, setEnable1] = useState(false);
//   const [enable2, setEnable2] = useState(false);
//   const handleEmailChange = (e) => {
//     setInput(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleClick = (e) => {
//     e.preventDefault();
//     const user = data.find(
//       (user) => input === user.email && password === user.password
//     );
//     if (!user) {
//       let emailExists = data.some((user) => user.email === input);
//       setEnable1(!emailExists);
//       setEnable2(emailExists);
//       setTimeout(() => {
//         console.log("Please check your credentials");
//       }, 3000);
//     } else {
//       setEnable1(false);
//       setEnable2(false);
//       setTimeout(() => {
//         console.log(data);
//       }, 3000);
//     }
//   };
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           id="input-email"
//           value={input}
//           onChange={handleEmailChange}
//         />
//         <p
//           id="user-error"
//           style={{ color: "red", display: enable1 ? "block" : "none" }}
//         >
//           User not found
//         </p>
//         <br />
//         <input
//           type="Password"
//           id="input-password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <p
//           id="password-error"
//           style={{ color: "red", display: enable2 ? "block" : "none" }}
//         >
//           Password Incorrect
//         </p>

//         <br />
//         <button id="submit-form-btn" onClick={handleClick}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const dummyUsers = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" },
];

const App = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [userDetailsError, setUserDetailsError] = useState({
    email: "",
    password: "",
  });

  const updateData = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));

    // setUserDetailsError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = dummyUsers.find((u) => u.email === userDetails.email);

    setUserDetailsError({ email: "", password: "" });

    setTimeout(() => {
      if (!foundUser) {
        setUserDetailsError({ email: "User not found", password: "" });
        console.log("Error: User not found");
      } else if (foundUser.password !== userDetails.password) {
        setUserDetailsError({ email: "", password: "Password Incorrect" });
        console.log("Error: Password Incorrect");
      } else {
        console.log("Login successful:", foundUser);
        setUserDetails({ email: "", password: "" });
      }
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="input-email"
        name="email"
        value={userDetails.email}
        onChange={updateData}
        required
        placeholder="Email"
      />
      <br />
      <span id="user-error" style={{ color: "red" }}>
        {userDetailsError.email}
      </span>
      <br />
      <input
        type="password"
        id="input-password"
        name="password"
        value={userDetails.password}
        onChange={updateData}
        required
        placeholder="Password"
      />
      <br />
      <span id="password-error" style={{ color: "red" }}>
        {userDetailsError.password}
      </span>
      <br />
      <button type="submit" id="submit-form-btn">
        Submit
      </button>
    </form>
  );
};

export default App;
