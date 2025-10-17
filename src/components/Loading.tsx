"use client";

import React from "react";
import { CircularProgress } from "@mui/material";

interface LoadingProps {
  size?: number; // optional, default to 20
  color?: "inherit" | "primary" | "secondary"; // optional, matches button color
}

const Loading: React.FC<LoadingProps> = ({ size = 20, color = "inherit" }) => {
  return <CircularProgress size={size} color={color} />;
};

export default Loading;
