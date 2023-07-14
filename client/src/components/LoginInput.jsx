import PropTypes from "prop-types";

const LoginInput = ({ type, placeholder, setter, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="login__input"
      onChange={(e) => setter(e.target.value)}
      required
    />
  );
};

export default LoginInput;

LoginInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setter: PropTypes.func,
};
