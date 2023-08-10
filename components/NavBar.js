import React from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar({ setCategory }) {
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
      className="nav flex justify-center bg-bgLight dark:bg-bgDark dark:text-signup   outline outline-offset-2 outline-1 text-gray-900 outline-cyan-600 dark:outline-cyan-100"
    >
      <div className="nav-links flex justify-center">
        <Link href="/" onClick={() => setCategory("all")}>
          Home
        </Link>
        <Link href="/" onClick={() => setCategory("News")}>
          News
        </Link>
        <Link href="/" onClick={() => setCategory("Entertinment")}>
          Entertinment
        </Link>
        <Link href="/" onClick={() => setCategory("Sports")}>
          Sports
        </Link>
        <Link href="/" onClick={() => setCategory("Technolgy")}>
          Technolgy
        </Link>
        <Link href="/" onClick={() => setCategory("Energy")}>
          Energy
        </Link>
        <Link href="/" onClick={() => setCategory("Trending")}>
          Trending
        </Link>
      </div>
    </div>
  );
}
