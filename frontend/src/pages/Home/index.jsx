import "./style.css";
import useFetchData from "../../apiCall";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/Dashboard";

function Home() {
  const { id } = useParams();
  const user = useFetchData(`http://localhost:3000/user/${id}`);
  const activity = useFetchData(`http://localhost:3000/user/${id}/activity`);
  const averageSessions = useFetchData(
    `http://localhost:3000/user/${id}/average-sessions`
  );
  const performance = useFetchData(
    `http://localhost:3000/user/${id}/performance`
  );

  return (
    <div className="home">
      <Navigation />
      {user.loading === false && activity.loading === false && (
        <Dashboard
          user={user.data.data}
          activity={activity.data.data}
          averageSessions={averageSessions.data.data}
          performance={performance.data.data.data}
          indicators={performance.data.data.kind}
          score={user.data.data.todayScore}
        />
      )}
    </div>
  );
}

export default Home;
