import "./style.css";
import Header from "./Header";
import DayliActivity from "./DayliActivity";

function Dashboard() {
  return (
    <main>
      <Header />

      <section>
        <div className="charts-container">
          <DayliActivity />
          <div>aaaaaaaaaaaaa</div>
        </div>
        <div>
          aaaaa
          <br />
          aaaaaa
          <br />
          aaaaaa
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
