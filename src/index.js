import React from "react";
import { render } from "react-dom";

import Dashboard from "./Dashboard";
import AuthContext from "./AuthContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const authUser = {
  username: "Techgiant"
};

const App = () => (
  <div style={styles}>
    <AuthContext.Provider value={authUser}>
      <Dashboard />
    </AuthContext.Provider>
  </div>
);

render(<App />, document.getElementById("root"));
