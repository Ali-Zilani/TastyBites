import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../layout/Main";

function Main() {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-primaryBG">
      {/* {loading ? (
        // <LoadingSpinner/>
        <p>Loading....</p>
      ) : ( */}
        <div>
          <Navbar />
          {/* all children will render from here */}
          <div className="min-h-screen">
            <Outlet/>
          </div>
          <Footer />
        </div>
      {/* )} */}
    </div>
  );
}

export default Main;
