"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { Button } from "@src/components/Button";
import { logos } from "@src/constants/logos";
import Image from "next/image";
import React, { useState } from "react";
import { icon } from "@src/constants/icons";

import type { LeftNavMetaData } from "@src/types/types";
import UserAvatar from "@src/components/UserAvatar";
import ClickableIcon from "@src/components/ClickableIcon";
import ClickableText from "@src/components/ClickableText";
import WelcomeMessage from "@src/ui/WelcomeMessage";
import StatOverview from "@src/ui/StatOverview";

// metadata Left Nav

const Dashboard = () => {
  const [page, setPage] = useState("");

  // wait and see if there is a use for this
  const [functionButton, setFunctionButton] = useState("");

  const leftNavMetaData: LeftNavMetaData[] = [
    { key: "dashboard", name: "Dashboard", icon: icon.dashboard },
    { key: "clients", name: "Clients", icon: icon.client },
    { key: "proposals", name: "Proposals", icon: icon.proposal },
    { key: "payments", name: "Payments", icon: icon.payment },
    { key: "library", name: "Library", icon: icon.library },
    { key: "apps", name: "Apps", icon: icon.apps },
    { key: "settings", name: "Settings", icon: icon.settings },
    { key: "help", name: "Help & Support", icon: icon.help },
  ];

  // passed on Button component
  const handleClick = () => {
    alert(page);
  };

  // to be used in this page only
  const functionClick = (func: string) => {
    alert(func);
  };
  return (
    <div className="flex flex-row h-[150vh] bg-[#f6f5fd]">
      <div className="flex-[0_0_17%] bg-[#ffffff] h-full p-5 flex flex-col">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-row items-center justify-center w-[10vw] h-[auto] gap-2 cursor-pointer">
            <div>
              <Image
                src={logos.logo}
                alt="keysiiLogo"
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
                // onMouseEnter={}
              />
            </div>
            <div>
              <Typography variant="overline" align="center">
                {"Keysii"}
              </Typography>
            </div>
          </div>

          {/* Page List Tabs */}
          {/* { Navigation Button} */}
          {/* {  Set Fix Height and make the content scrollable } */}
          <nav className="flex flex-col mt-2 overflow-auto">
            <Button
              leftNavMetaData={leftNavMetaData}
              handleClick={handleClick}
              setPage={setPage}
            />
          </nav>

          <div className="border mt-50">
            <div>
              <h1> Something Promo</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Center */}
      {/* { make the screen dynamic later on } */}
      <div className="flex-1 px-7 py-4 flex flex-col h-[150vh] overflow-auto gap-5">
        {/* 1st Row */}
        <div className="mt-4 bg-white flex flex-row p-3 justify-between rounded-xl">
          <div className="flex gap-2 justify-center items-center">
            <Typography
              variant="caption"
              color="textDisabled"
              sx={{
                fontFamily: "Inter",
              }}
            >
              Keysii Solutions Inc.
            </Typography>

            <ClickableIcon
              className={
                "bg-[#eb5b43] rounded-full flex items-center justify-center h-[2rem] w-[2rem]"
              }
              icon={icon.add}
              functionClick={functionClick}
              functionType={"add"}
              color={"white"}
              fontSize={22}
            />
          </div>
          <div className="flex bg-amber-200 justify-center items-center">
            <ClickableIcon
              className={
                "bg-[#1b7171] rounded-lg flex items-center justify-center h-[2rem] w-[2rem]"
              }
              icon={icon.search}
              functionClick={functionClick}
              functionType={"search"}
              color={"white"}
              fontSize={20}
            />
          </div>
        </div>

        {/* 2nd Row  */}
        <div className="flex-[0.5] bg-[#ddecf0] flex flex-row px-5 rounded-lg">
          <WelcomeMessage />
        </div>

        {/* 3rd Row */}
        <div className="flex-[0.25] bg-white flex flex-row gap-2 p-1 text-[#fafafa]">
          <StatOverview />
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

      {/* Right Side Bar */}
      <div className="flex-[0_0_17%] bg-[#ffffff] h-full flex flex-col">
        <div className="flex-row flex justify-between p-2 px-2.5 mt-9">
          <Typography
            variant="body1"
            color="secondary"
            sx={{
              fontFamily: "Inter",
            }}
          >
            LOGOUT
          </Typography>

          <ClickableIcon
            icon={icon.logout}
            functionClick={functionClick}
            functionType={"logout"}
          />
        </div>
        <div className="flex flex-col bg-white p-10 justify-center items-center gap-3">
          <div
            onClick={() => {
              alert("profile");
            }}
            style={{ cursor: "pointer" }}
          >
            <UserAvatar alt={"Hannah"} src={""} badge={4} size={100} />
          </div>

          <div className="flex justify-center items-center flex-col">
            {/* Similar -- make it dynamic */}
            <Typography
              key={"name"}
              sx={{
                fontFamily:
                  "'Montserrat', 'Open Sans', 'Helvetica', 'Arial', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: 0.01,
              }}
            >
              Hannah Erica
            </Typography>
            <Typography
              key={"name1"}
              sx={{
                fontFamily:
                  "'Montserrat', 'Open Sans', 'Helvetica', 'Arial', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              Accountant
            </Typography>
          </div>
          <ClickableText
            innerClassName={"flex"}
            outerClassName={
              "bg-[#337c7d] flex-1 w-[8rem] rounded-sm flex justify-center items-center text-white p-1 cursor-pointer"
            }
            functionClick={functionClick}
            functionType={"myProfile"}
            text={"My Profile"}
          />
        </div>
        <div className="flex flex-col h-[20rem] mt-10 overflow-auto p-2">
          <div>Recent Activity</div>
          <div className="p-4">
            <ol>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
              <li>Transaction Recent</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
