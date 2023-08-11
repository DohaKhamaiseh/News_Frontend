import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function NavBar({ setCategory }) {
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
      className="nav flex justify-center z-10 bg-bgLight dark:bg-bgDark dark:text-signup  pb-2 outline  outline-1 text-gray-900 outline-cyan-600 dark:outline-cyan-100"
    >
      <div className="nav-links flex justify-center">
        <Link href="/" onClick={() => setCategory("all")}>
          {t("home:home")}
        </Link>
        <Link href="/" onClick={() => setCategory("News")}>
          {t("home:news_cat")}
        </Link>
        <Link href="/" onClick={() => setCategory("Entertainment")}>
          {t("home:enter_cat")}
        </Link>
        <Link href="/" onClick={() => setCategory("Sports")}>
          {t("home:sport_cat")}
        </Link>
        <Link href="/" onClick={() => setCategory("Technology")}>
          {t("home:tech_cat")}
        </Link>
        <Link href="/" onClick={() => setCategory("Energy")}>
          {t("home:eng_cat")}
        </Link>
        <Link href="/" onClick={() => setCategory("Trending")}>
          {t("home:trending_cat")}
        </Link>
      </div>
    </div>
  );
}
