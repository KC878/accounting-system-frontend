import React from "react";
import type { ClickableTextProps } from "@src/interfaces/interfaces";

const ClickableIcon: React.FC<ClickableTextProps> = ({
  outerClassName,
  innerClassName,
  functionClick,
  functionType,
  text,
}) => {
  return (
    <div
      className={outerClassName}
      onClick={() => {
        functionClick(functionType);
      }}
    >
      <div className={innerClassName}>{text}</div>
    </div>
  );
};

export default ClickableIcon;
