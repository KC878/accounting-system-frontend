import Text from "@src/components/Text";
import React from "react";
import { images } from "@src/constants/images";
import Image from "next/image";

const WelcomeMessage = () => {
  return (
    <>
      <div className="flex-2 flex-col flex justify-center gap-1">
        <Text
          text={"Welcome back Hannah!"}
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
        <Image
          src={images.female}
          alt="keysiiLogo"
          style={{
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </div>
    </>
  );
};

export default WelcomeMessage;
