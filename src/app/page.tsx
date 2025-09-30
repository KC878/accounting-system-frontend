"use client";
import Signup from "@src/ui/Signup";
import Login from "@src/ui/Login";
import { useState } from "react";

const Home = () => {
  // return <Signup />; // Create Switch for Login and Signup Later
  const [homeUI, setHomeUI] = useState<"login" | "signup">("signup");

  return homeUI === "signup" ? (
    <Login homeUI={homeUI} setHomeUI={setHomeUI} />
  ) : (
    <Signup homeUI={homeUI} setHomeUI={setHomeUI} />
  );
};

export default Home;
