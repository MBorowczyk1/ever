import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Hero } from "../components/Hero";
import { auth, db, logout } from "../modules/firebase";

function Dashboard2() {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <div className="dashboard">
      <Hero />
    </div>
  );
}
export default Dashboard2;