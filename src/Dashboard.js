import React from "react";
import UserInformation from "./UserInformation";

const styles = {
	width: '100%',
	backgroundColor: '#eee',
	padding: 50,
};

const Dashboard = () => (
  <div style={styles}>
    <h1>Dashboard</h1>
    <UserInformation />
  </div>
);

export default Dashboard;
