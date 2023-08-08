import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGlobeAsia, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function SmallHeader() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState({ datetime: "" });
  const monthes = [
    "",
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const days = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعه",
    "السبت",
  ];
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
    console.log(response.data);
  }
  useEffect(() => {
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
          Language {show ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}{" "}
          <FaGlobeAsia size={23} />
        </button>
        {show ? (
          <ul className="lang-dropdown">
            {langs.map(({ code, name, countru_code }) => (
              <li key={countru_code}>
                <button

                // onClick={() => i18next.changeLanguage(code)}
                // disabled={code == currntlangcode}
                >
                  <span
                    className={`fi fi-${countru_code} mx-2`}
                    //   style={{ opacity: code === currntlangcode ? 0.5 : 1 }}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-1">
        <p>{y} -</p>
        <p>{monthes[Number(m)]} -</p>
        <p>{d}</p>
        <p>{days[date.day_of_week]}</p>
      </div>
    </header>
  );
}
