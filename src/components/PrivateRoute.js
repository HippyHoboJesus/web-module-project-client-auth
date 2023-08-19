import React from "react"
import { Navigate, useAuth } from "react-router-dom"
import FriendsList from "./FriendsList";

function PrivateRoute({children}) {
    const token = localStorage.getItem("token")
    return token ? <>{children}</> : <Navigate to="/login" />;
  }

export default PrivateRoute