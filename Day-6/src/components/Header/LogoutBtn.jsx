import React from "react";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";

// Bring Dispatch
// also bring reducer: logout
// authService

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 hover:bg-blue-200 transition-all duration-300 rounded-full"
      onClick={logouthandler}
    >
      LogoutBtn
    </button>
  );
};

export default LogoutBtn;
