import Card from "@/components/Card";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import Loader from "./Loader";

export default function TechSection() {
  const { data, loading } = useApi("technology");
  const { dataAr, loadingAr } = useApi2("tech", "ar"); // en or ar from cookies

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <h1 className="text-2xl dark:text-white text-black flex  pt-10  ">
            <span className="w-4 bg-black mx-2 title_box"> </span>
            Technology
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "}
          </h1>
          <ul className="cards  ">
            {Cookies.get("lang") ? (
              <>
                {dataAr.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            ) : (
              <>
                {data.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
