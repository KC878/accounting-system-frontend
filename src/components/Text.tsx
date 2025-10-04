import React from "react";
import { Typography } from "@mui/material";
import type { TextProps } from "@src/interfaces/interfaces";

const Text: React.FC<TextProps> = ({
  text,
  variant = "body1",
  color = "textPrimary",
  sx,
  align,
  className,
}) => {
  return (
    <div className={className}>
      <Typography variant={variant} color={color} sx={sx} align={align}>
        {text}
      </Typography>
    </div>
  );
};

export default Text;
