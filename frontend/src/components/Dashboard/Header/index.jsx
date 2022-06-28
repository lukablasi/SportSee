import "./style.css";

function Header() {
  return (
    <div>
      <div className="hello">
        Hello <span className="name">Thomas</span>
      </div>
      <div className="greeting">
        Congratulations! You reached yesterday’s goal! 👏
      </div>
    </div>
  );
}

export default Header;
