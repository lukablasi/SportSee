import "./style.css";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/Dashboard";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default Home;
