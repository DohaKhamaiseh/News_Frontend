import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function NavProfile({ setCategory, catgory }) {
  const { t } = useTranslation();
  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.addEventListener("scroll", handleScroll);

    // Get the navbar
    let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    // let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function handleScroll() {
      if (window.scrollY >= 155) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);

  return (
    <div
      id="navbar"
      className="nav flex justify-center z-50 bg-bgLight dark:bg-bgDark dark:text-signup  pb-2 outline  outline-1 text-gray-900 outline-cyan-600 dark:outline-cyan-100"
    >
      <div className="nav-links flex justify-center">
        <Link
          href="/Profile/MyNews"
          onClick={() => setCategory("all")}
          style={
            catgory == "all" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          My News
        </Link>
        <Link
          href="/Profile/ReadingList"
          onClick={() => setCategory("Reading_List")}
          style={
            catgory == "Reading_List" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          Reading List
        </Link>
        <Link
          href="/Profile/ProfileInfo"
          onClick={() => setCategory("Profile_Info")}
          style={
            catgory == "Profile_Info"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
          Profile Info
        </Link>
      </div>
    </div>
  );
}
