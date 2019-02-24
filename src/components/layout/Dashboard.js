import React from "react";
import Clients from "../clients/Clients";
import SideBar from "./Sidebar";

function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <SideBar />
      </div>
    </div>
  );
}

export default Dashboard;
