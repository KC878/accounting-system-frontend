import React from "react";

const StatOverview = () => {
  const statLayout = "flex-1 flex-col flex justify-center items-center p-2";
  return (
    <>
      <div className="flex-1 bg-[#029fa4] flex flex-row justify-center items-center rounded-xl">
        <div className={statLayout}>
          <h1 className="border">$422.89K</h1>
          <p className="border"> 23% Loan Margin </p>
        </div>
        <div className={statLayout}>
          <p className="border"> Projected </p>
          <p className="border"> Total Revenue</p>
        </div>
      </div>
      <div className="flex-1 bg-[#e64c31] flex flex-row justify-center items-center rounded-xl">
        <div className={statLayout}>
          <h1 className="border text-xl lg:text-4xl sm:text-2xl">62%</h1>
          <p className="border"> ^ % </p>
        </div>
        <div className={statLayout}>
          <p className="border"> Converrge </p>
          <p className="border"> Proposal</p>
          <p className="border"> Something</p>
        </div>
      </div>
      <div className="flex-1 bg-[#80b0a4] flex flex-row justify-center items-center rounded-xl">
        <div className={statLayout}>
          <h1 className="border text-xl lg:text-4xl sm:text-2xl">463</h1>
          <p className="border"> ^ Something </p>
        </div>
        <div className={statLayout}>
          <p className="border"> Current class </p>
        </div>
      </div>
    </>
  );
};

export default StatOverview;
