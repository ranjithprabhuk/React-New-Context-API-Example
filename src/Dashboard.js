import React from "react";
import Nav from "./Nav";

const styles = {
	width: '100%',
	backgroundColor: '#eee',
};

const Dashboard = () => (
  <div style={styles}>
    <h1>Dashboard</h1>
    <Nav />
  </div>
);

export default Dashboard;
