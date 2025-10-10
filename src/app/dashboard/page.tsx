"use client";

import { Typography } from "@mui/material";
import { Button } from "@src/components/Button";
import { logos } from "@src/constants/logos";
import Image from "next/image";
import React, { useState } from "react";
import { icon } from "@src/constants/icons";

import type { LeftNavMetaData } from "@src/types/types";
import UserAvatar from "@src/components/UserAvatar";
import ClickableIcon from "@src/components/ClickableIcon";
import ClickableText from "@src/components/ClickableText";
import WelcomeMessage from "@src/ui/Dashboard/WelcomeMessage";
import StatOverview from "@src/ui/Dashboard/StatOverview";
import FinancialOverview from "@src/ui/Dashboard/FinancialOverview";
import BasicList from "@src/components/BasicList";
import Text from "@src/components/Text";

import { AxiosError } from "axios";
import { deleteAllCookies, getCookie } from "@src/utils/utils";
import { logoutUser } from "@src/services/userService";
import { useRouter } from "next/navigation";
// metadata Left Nav

const Dashboard = () => {
  // navigate
  const router = useRouter();
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
  const functionClick = async (func: string) => {
    alert(func);
    try {
      if (func === "logout") {
        const csrftoken = getCookie("csrftoken")!;

        const result = await logoutUser(csrftoken);

        if (result.data.message === "Logged out successfully") {
          // delete all cookies
          deleteAllCookies();

          router.push("/");
        }
      }
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      console.error("Logout error: ", axiosErr);
    }
  };
  return (
    <div className="flex flex-row h-screen bg-[#f6f5fd]">
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
        </div>
      </div>

      {/* Center */}
      {/* { make the screen dynamic later on } */}
      <div className="flex-1 px-7 py-4 flex flex-col h-screen overflow-auto gap-5">
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
        <div className="flex-[0.25] flex flex-row gap-2 p-1 text-[#fafafa]">
          <StatOverview />
        </div>

        {/* Info Board */}
        <div className="flex-1 flex flex-row">
          <FinancialOverview />
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
        <div className="flex flex-col h-[20rem] mt-10 p-2">
          <Text
            text={"Recent Activity"}
            sx={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}
          />
          <div
            className={`p-1  mt-3 overflow-auto`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0.2) transparent",
            }}
          >
            <BasicList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
