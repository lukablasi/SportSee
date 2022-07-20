import "./style.css";
import PropTypes from "prop-types";

/**
 * component for greeting a user
 * @param {string} userName
 * @example const userName = "Adam"
 * @returns (
 * <Header userName={userName} />
 * )
 */

function Header({ userName }) {
  return (
    <div>
      <div className="hello">
        Hello <span className="name">{userName}</span>
      </div>
      <div className="greeting">
        Congratulations! You reached yesterday’s goal! 👏
      </div>
    </div>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

Header.defaultProps = {
  userName: "User",
};

export default Header;
