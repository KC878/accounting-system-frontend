"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // stop spinner after 2 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <div>Content Loaded!</div>; // replace with your main content
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <CircularProgress size={80} color="primary" />
    </div>
  );
};

export default Loading;
