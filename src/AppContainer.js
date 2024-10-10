import React from "react";
import "./AppContainer.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet/>
    </div>
  );
};

export default AppContainer;
