import React from "react";
import AuthContext from "./AuthContext";

const UserInformation = () => (
  <AuthContext.Consumer>
    {authUser => (
      <div>
        <p>
          Your username is <strong>{authUser.username}</strong>
        </p>
      </div>
    )}
  </AuthContext.Consumer>
);

export default UserInformation;
