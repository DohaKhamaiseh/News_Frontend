import React from "react";
import { useAuth } from "../context/auth";
import { useApi3 } from "../hooks/useApi";
import { useState } from "react";
import Link from "next/link";
import SmallHeader from "./SmallHeader";

export default function Header() {
  const { login, user, logout } = useAuth();
  const location = user?.location;
  const username = user?.username;
  // console.log(user)
  // console.log(location)
  const { data, loading, error } = useApi3(location);
  const [Mode, setMode] = useState("light");
  const handleMode = () => {
    let htmlClasses = document.documentElement.classList;

    if (htmlClasses.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <SmallHeader />
      <header className="w-full  text-gray-700 bg-bgLight border-t border-b border-gray-300 dark:border-gray-600 shadow-sm body-font dark:bg-bgDark">
        <div className="container flex flex-col items-start justify-between p-8 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="100"
              height="50"
            >
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#007bff" />
                  <stop offset="100%" stopColor="#00cc99" />
                </linearGradient>
              </defs>

              <text
                x="10"
                y="40"
                fontFamily="Vina Sans, Arial, sans-serif"
                fontSize="40"
                fontWeight="bold"
                fill="url(#logo-gradient)"
              >
                Daily
              </text>
              <text
                x="10"
                y="80"
                fontFamily="Vina Sans, Arial, sans-serif"
                fontSize="40"
                fontWeight="bold"
                fill="url(#logo-gradient)"
              >
                Pulse
              </text>
            </svg>
          </a>

          <div className="justify-center pl-6 ml-6  mb-2   border-gray-200  mr-5 md:mr-auto ">
            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input type="checkbox" className="input" onClick={handleMode} />
              <span className="slider"></span>
            </label>
          </div>

          <div className="items-center h-full">
            {user ? (
              <>
                <span className="  ml-2 px-4 py-2 text-xs   dark:text-teal-600  text-gray-900 font-bold">
                  {Math.round(data) - 273}°C
                </span>
                <text className="  ml-2 font-larg px-6 py-4 text-xs dark:text-teal-600  text-gray-900 font-bold">
                  {username}
                </text>

                <a
                  className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 custom-teal-bg rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                  onClick={() => logout()}
                >
                  {" "}
                  Logout{" "}
                </a>
              </>
            ) : (
              <>
                {/* onClick={() => login("amjad", "1234")} */}
                <Link
                  href="/signin"
                  className="mr-5  dark:text-teal-600  text-gray-900 font-bold"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 custom-teal-bg rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
