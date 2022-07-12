import "./style.css";
import Header from "./Header";
import DayliActivity from "./DayliActivity";
import SessionsSpeed from "./SessionsSpeed";
import Performance from "./Performance";
import Score from "./Score";
import KeyData from "./KeyData";

function Dashboard({
  user,
  activity,
  averageSessions,
  performance,
  indicators,
  score,
}) {
  return (
    <main>
      <Header userName={user.userInfos.firstName} />

      <section>
        <div className="charts-container">
          <DayliActivity sessions={activity.sessions} />
          <div className="details-charts">
            <SessionsSpeed sessions={averageSessions.sessions} />
            <Performance performance={performance} indicators={indicators} />
            <Score score={score} />
          </div>
        </div>
        <div>
          <KeyData keyData={user.keyData} />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
