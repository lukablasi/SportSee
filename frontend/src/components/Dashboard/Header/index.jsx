import "./style.css";

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

export default Header;
