import React from "react";
import type { ClickableIconProps } from "@src/interfaces/interfaces";

const ClickableIcon: React.FC<ClickableIconProps> = ({
  className,
  icon: Icon,
  functionClick,
  functionType,
  fontSize,
  color,
}) => {
  return (
    <div className={className}>
      <Icon
        style={{ cursor: "pointer" }}
        onClick={() => {
          functionClick(functionType);
        }}
        sx={{
          color: color,
          fontSize: fontSize,
        }}
      />
    </div>
  );
};

export default ClickableIcon;
