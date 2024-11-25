import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";

const Auth = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (username) dispatch(login(username));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
