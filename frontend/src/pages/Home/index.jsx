import "./style.css";
import useFetchData from "../../apiCall";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/Dashboard";

function Home() {
  const { id } = useParams();
  const data = useFetchData(`http://localhost:3000/user/${id}`);

  return (
    <div className="home">
      <Navigation />
      {data.loading === false && <Dashboard user={data.data.data} />}
    </div>
  );
}

export default Home;
