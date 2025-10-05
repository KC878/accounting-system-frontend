import { ClassNames } from "@emotion/react";
import { responsiveFontSizes } from "@mui/material";
import Text from "@src/components/Text";
import React from "react";

const StatOverview = () => {
  const statLayout = "flex-1 flex-col flex justify-center items-center p-3";
  return (
    <>
      <div className="flex-1 bg-[#029fa4] flex flex-row justify-center items-center rounded-xl">
        <div className={statLayout}>
          <Text
            text={"$422.89K"}
            sx={{
              fontWeight: 600,
              fontFamily: "Arial, Hevetica, Roboto",
              fontSize: "1.8rem",
              color: "#f5f5f5",
            }}
          />
          <Text
            text={"▲ 37% Last Month"}
            variant={"subtitle2"}
            color="#e3e3e3"
          />
        </div>
        <div className={"flex-1 flex-col flex p-1"}>
          <Text
            text={"Projected Total"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.79rem" }}
            className=""
          />
          <Text
            text={"Revenue"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.79rem" }}
          />
        </div>
      </div>
      <div className="flex-1 bg-[#e64c31] flex flex-row justify-center items-center rounded-xl">
        <div className={"flex-1 pl-4 p-1"}>
          <Text
            text={"62%"}
            sx={{
              fontWeight: 600,
              fontFamily: "Arial, Hevetica, Roboto",
              fontSize: "2.8rem",
              color: "#f5f5f5",
            }}
          />
          <Text
            text={"▲ 2%"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.79rem" }}
            className={"flex item-s"}
          />
        </div>
        <div className={"flex-1 flex-col flex  p-1"}>
          <Text
            text={"Conversion (%)"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.8rem" }}
          />
          <Text
            text={"Prospects sent in "}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.8rem" }}
          />

          <Text
            text={"the last 30 days"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.8rem" }}
          />
        </div>
      </div>
      <div className="flex-1 bg-[#80b0a4] flex flex-row justify-center items-center rounded-xl">
        <div className={"flex-1 pl-5 p-1"}>
          <Text
            text={"463"}
            sx={{
              fontWeight: 600,
              fontFamily: "Arial, Hevetica, Roboto",
              fontSize: "2.8rem",
              color: "#f5f5f5",
            }}
          />
          <Text
            text={"▲ 4% Last Month"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.79rem" }}
            className={"flex item-s"}
          />
        </div>
        <div className={"flex-1 flex-col flex p-3"}>
          <Text
            text={"Current Clients"}
            variant={"subtitle2"}
            color="#e3e3e3"
            sx={{ fontSize: "0.9rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default StatOverview;
