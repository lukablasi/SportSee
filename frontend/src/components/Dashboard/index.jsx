import "./style.css";
import Header from "./Header";
import DayliActivity from "./DayliActivity";

function Dashboard({ user }) {
  return (
    <main>
      <Header userName={user.userInfos.firstName} />

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
