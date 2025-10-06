import Text from "@src/components/Text";
import React from "react";
import { metadata } from "@src/metadata/FinancialOverview";
import Chart from "./Chart";
const FinancialOverview = () => {
  const defaultStyle = "flex flex-col p-2";

  const firstRowMetaData = [
    metadata.projectedTotal,
    metadata.projectedTotal,
    metadata.projectedTotal,
  ];

  const secondRowMetaData = [
    metadata.projectedTotal,
    metadata.projectedTotal,
    metadata.projectedTotal,
  ];

  // just a way to looop through
  const outerStyle = [
    "flex flex-row justify-center items-center",
    "flex flex-row justify-center items-center",
  ];

  const header = ["Revenue", "Payments"];
  return (
    <>
      {/* ts-ignore */}
      {header.map((text, idx) => (
        <div key={idx} className="flex-1 flex flex-col rounded-xl ">
          <div className="flex-1 flex justify-center items-center rounded-xl p-3 ">
            <Chart />
          </div>
          <div className="bg-white flex-1 flex flex-col rounded-xl m-2.5">
            <div className="p-3">
              <Text
                text={text}
                sx={{ fontSize: "1.5rem", fontWeight: 550, color: "#1a1a1a" }}
              />
            </div>

            {outerStyle.map((style, idx) => (
              <div className={style} key={idx}>
                {firstRowMetaData.map((dataGroup, idx) => (
                  <div key={idx} className={defaultStyle}>
                    {dataGroup.map((item, index) => (
                      <Text
                        key={index}
                        text={item.text}
                        variant={item.variant}
                        sx={item.sx}
                        color={item.color}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FinancialOverview;
