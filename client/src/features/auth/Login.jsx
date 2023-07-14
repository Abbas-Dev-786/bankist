import { useState } from "react";
import LoginInput from "../../components/LoginInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);

  return (
    <div className="tab" id="login_div">
      <form className="auth-form">
        <LoginInput
          type="text"
          value={username}
          placeholder="Enter username"
          setter={setUsername}
        />

        <LoginInput
          type="password"
          placeholder="Enter password"
          value={password}
          setter={setPassword}
        />
        <br />
        <button type="submit" className="login__btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
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
