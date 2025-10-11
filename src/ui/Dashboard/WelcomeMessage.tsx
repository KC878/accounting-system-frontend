"use client";

import Text from "@src/components/Text";
import React, { useEffect, useState } from "react";
import { images } from "@src/constants/images";
import Image from "next/image";
import { useDashboard } from "@src/store/store";
import { Sex } from "@src/types/types";
const WelcomeMessage = () => {
  const { dashboardState } = useDashboard();

  let sex: string | undefined;

  if (dashboardState.sex === "male") {
    sex = images.male.src;
  } else if (dashboardState.sex === "female") {
    sex = images.female.src;
  }
  return (
    <>
      <div className="flex-2 flex-col flex justify-center gap-1">
        <Text
          text={`Welcome back! `}
          variant="h4"
          color={"#cd9e92"}
          sx={{ fontWeight: 600, fontFamily: "Montserrat" }}
          className={"px-15"}
        />
        <Text
          text={"You've sent 250 proposals this week."}
          variant="subtitle1"
          sx={{
            fontFamily: "Montserrat, Open Sans, Helvetica, Arial, sans-serif",
          }}
          color={"#0a0a0a"}
          className={"px-16"}
        />
        <Text
          text={"Keep it up and improve your results!"}
          variant="subtitle2"
          color={"#0a0a0a"}
          className={"px-16"}
        />
      </div>
      <div className="flex-1 flex-col flex justify-center items-center">
        {sex && (
          <Image
            src={sex}
            alt="keysiiLogo"
            width={200}
            height={200}
            style={{
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        )}
      </div>
    </>
  );
};

export default WelcomeMessage;
