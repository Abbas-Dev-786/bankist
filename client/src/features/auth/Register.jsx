import { useState } from "react";
import LoginInput from "../../components/LoginInput";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="tab" id="signup_div">
      <form className="auth-form">
        <LoginInput
          type="text"
          placeholder="Enter your FirstName"
          setter={setFirstName}
          value={firstName}
        />

        <LoginInput
          type="text"
          placeholder="Enter your last name"
          setter={setLastName}
          value={lastName}
        />

        <LoginInput
          type="email"
          placeholder="Enter your email"
          setter={setEmail}
          value={email}
        />

        <LoginInput
          type="text"
          placeholder="Enter username"
          setter={setUsername}
          value={username}
        />

        <LoginInput
          type="password"
          placeholder="Enter password"
          value={password}
          setter={setPassword}
        />

        <LoginInput
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          setter={setConfirmPassword}
        />
        <br />
        <button className="login__btn">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
// <div>
//   <p className="welcome">Log in to get started</p>
//   <form className="login">
//     <input
//       type="text"
//       placeholder="user"
//       className="login__input login__input--user"
//     />
//     <input
//       type="text"
//       placeholder="PIN"
//       maxLength="4"
//       className="login__input login__input--pin"
//     />
//     <button className="login__btn">&rarr;</button>
//   </form>
// </div>
