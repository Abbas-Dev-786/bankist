// import Login from "./Login";
// import Register from "./Register";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./test.css";

const Auth = () => {
  const [currentTab, setCurrentTab] = useState("login");

  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/12-Numbers-Dates-Timers-Bankist/final/logo.png?raw=true"
          alt="Logo"
          className="logo"
        />
      </nav>
      <div className="auth-container">
        <div className="tabs_container">
          <button
            className={`btn ${currentTab === "login" ? "active" : ""}`}
            id="flex-item-1"
            onClick={() => setCurrentTab("login")}
          >
            Login
          </button>
          <button
            className={`btn ${currentTab === "register" ? "active" : ""}`}
            id="flex-item-2"
            onClick={() => setCurrentTab("register")}
          >
            Register
          </button>
        </div>
        <div className="page_tabs">
          {currentTab === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
