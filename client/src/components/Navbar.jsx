const Navbar = () => {
  return (
    <nav>
      <img
        src="https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/12-Numbers-Dates-Timers-Bankist/final/logo.png?raw=true"
        alt="Logo"
        className="logo"
      />
      <p className="welcome">Hello, XXXXXX</p>
      {/* <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
      />
      <input
        type="text"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
      />
      <button className="login__btn">&rarr;</button>
    </form> */}
    </nav>
  );
};

export default Navbar;
