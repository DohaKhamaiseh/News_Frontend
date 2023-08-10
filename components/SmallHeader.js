import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGlobeAsia, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function SmallHeader() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState({ datetime: "" });
  const { t } = useTranslation();
  const monthes = [
    "",
    t("home:January"),
    t("home:February"),
    t("home:March"),
    t("home:April"),
    t("home:May"),
    t("home:June"),
    t("home:July"),
    t("home:August"),
    t("home:September"),
    t("home:October"),
    t("home:November"),
    t("home:December"),
  ];
  const days = [
    t("home:Sunday"),
    t("home:Monday"),
    t("home:Tuesday"),
    t("home:Wednesday"),
    t("home:Thursday"),
    t("home:Friday"),
    t("home:Saturday"),
  ];
  function handleDir() {
    const dir = document.documentElement.dir;
    if (dir === "ltr") {
      document.documentElement.dir = "rtl";
      Cookies.set("dir", "rtl");
      Cookies.set("lang", "ar");
    } else {
      document.documentElement.dir = "ltr";
      Cookies.remove("dir", "rtl");
      Cookies.remove("lang", "ar");
    }
    console.log(dir);
  }
  const langs = [
    {
      code: "en",
      name: "English",
      countru_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      countru_code: "sa",
      dir: "rtl",
    },
  ];
  async function getDate() {
    const response = await axios.get(
      "https://worldtimeapi.org/api/timezone/Asia/Amman"
    );
    setDate(response.data);
    // console.log(response.data);
  }

  useEffect(() => {
    if (Cookies.get("dir")) {
      document.documentElement.dir = "rtl";
    }
    getDate();
  }, []);
  const y = date.datetime.slice(0, 10).split("-")[0];
  const m = date.datetime.slice(0, 10).split("-")[1];
  const d = date.datetime.slice(0, 10).split("-")[2];
  return (
    <header className="p-2 flex justify-between bg-gray-600 ">
      <div>
        <button
          className="mx-20 flex justify-between"
          onClick={() =>
            setShow((prev) => {
              if (prev === true) {
                setShow(false);
              } else {
                setShow(true);
              }
            })
          }
        >
          {show ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}{" "}
          <FaGlobeAsia size={23} />
        </button>
        {show ? (
          <ul className="lang-dropdown">
            {langs.map(({ code, name, countru_code }) => (
              <li key={countru_code}>
                <Link href="" locale={code} onClick={handleDir}>
                  <button>
                    <span className={`fi fi-${countru_code} mx-2`}></span>
                    {name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-1 px-10">
        <p>{days[date.day_of_week]}</p>
        <p>- {d}</p>
        <p>- {monthes[Number(m)]}</p>
        <p>- {y}</p>
      </div>
    </header>
  );
}
