"use client";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-[150vh] w-screen bg-blue-300">
      <div className="flex-[0_0_17%] bg-amber-300 h-full"> </div>

      {/* Center */}
      {/* { make the screen dynamic later on } */}
      <div className="flex-1 p-5 flex flex-col h-[150vh] overflow-auto gap-5">
        {/* 1st Row */}
        <div className="mt-10 bg-white flex flex-row p-2 justify-between">
          <div className="bg-red-400 flex border gap-2 justify-center items-center">
            <p className="border">Text Here</p>
            <button className="border">+ </button>
          </div>
          <div className="flex bg-amber-200 border justify-center items-center">
            <button className="border"> Search </button>
          </div>
        </div>

        {/* 2nd Row  */}
        <div className="flex-[0.5] bg-gray-400 flex flex-row">
          <div className="flex-2 flex-col flex justify-center items-center gap-2 bg-red-400">
            <div className="border"> Welcome back Hannah!</div>
            <div className="border"> Keep it up and improve your results!</div>
          </div>
          <div className="flex-1 flex-col flex justify-center items-center bg-amber-400">
            <button>Image here</button>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="flex-[0.25] bg-white flex flex-row gap-2 p-1">
          <div className="flex-1 bg-emerald-300 flex flex-row justify-center items-center rounded-xl">
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <h1 className="border">$422.89K</h1>
              <p className="border"> 23% Loan Margin </p>
            </div>
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <p className="border"> Projected </p>
              <p className="border"> Total Revenue</p>
            </div>
          </div>
          <div className="flex-1 bg-orange-300 flex flex-row justify-center items-center rounded-xl">
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <h1 className="border text-xl lg:text-4xl sm:text-2xl">62%</h1>
              <p className="border"> ^ % </p>
            </div>
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <p className="border"> Converrge </p>
              <p className="border"> Proposal</p>
              <p className="border"> Something</p>
            </div>
          </div>
          <div className="flex-1 bg-green-900 flex flex-row justify-center items-center rounded-xl">
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <h1 className="border text-xl lg:text-4xl sm:text-2xl">463</h1>
              <p className="border"> ^ Something </p>
            </div>
            <div className="flex-1 flex-col flex justify-center items-center p-2">
              <p className="border"> Current class </p>
            </div>
          </div>
        </div>

        {/* Info Board */}
        <div className="flex-1 bg-gray-400 flex flex-row">
          <div className="bg-white flex-1 flex flex-col">
            <div className="bg-gray-300 flex-1 flex flex-col p-2">
              <div className="border txt-lg lg:txt-4xl sm:txt-2xl">Revenue</div>
              <div className="flex flex-row p-2 gap-9 justify-center items-center">
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
              </div>
              <div className="flex flex-row p-2 gap-9 justify-center items-center">
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex-1 flex justify-center items-center">
              Chart
            </div>
          </div>

          <div className="bg-white flex-1 flex flex-col">
            <div className="bg-red-300 flex-1 flex flex-col p-2">
              <div className="border txt-lg lg:txt-4xl sm:txt-2xl">
                Payments
              </div>
              <div className="flex flex-row p-2 gap-9 justify-center items-center">
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
              </div>
              <div className="flex flex-row p-2 gap-9 justify-center items-center">
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
                <div className="border">
                  <p>$422.69K</p>
                  <p> Something</p>
                  <p> Something</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex-1 flex justify-center items-center">
              Chart
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white flex flex-row">
          <div className="flex-1 flex flex-col border">
            <div className="flex-1 border">Pipeline</div>
            <div className="flex-2 border">Donut Chart</div>
            <div className="flex-1 flex flex-col">
              <div className="flex flex-row">
                <div className="w-5 h-5 flex border rounded-full bg-green-300"></div>
                <div className="flex-1"> Leads</div>
              </div>
              <div className="flex flex-row">
                <div className="w-5 h-5 flex border rounded-full bg-green-300"></div>
                <div> Proposals</div>
              </div>
              <div className="flex flex-row">
                <div className="w-5 h-5 flex border rounded-full bg-green-300"></div>
                <div> Negotaions</div>
              </div>
              <div className="flex flex-row">
                <div className="w-5 h-5 flex border rounded-full bg-green-300"></div>
                <div> Closed</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col border">
            <div className="flex-2 flex flex-col bg-gray-400">
              <div> Clients </div>
              <div className="flex flex-row gap-2">
                <p>Client</p>
                <p>Status</p>
                <p>Revenue</p>
                <p>Outstanding</p>
              </div>
            </div>
            <div className="flex-1 bg-amber-400 flex flex-col">
              <div className="flex-1">Clients</div>
              <div className="flex-1">F Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0_0_17%] bg-amber-300 h-full"> </div>
    </div>
  );
};

export default Dashboard;
