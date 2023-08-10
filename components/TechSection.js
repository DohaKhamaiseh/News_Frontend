import Card from "@/components/Card";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { document } from "postcss";
import Cookies from "js-cookie";

export default function TechSection() {
  const { data, loading } = useApi("technology");
  const { dataAr, loadingAr } = useApi2("tech", "ar");

  return (
    <div className="dark:bg-bgDark pt-10 bg-white">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="text-2xl dark:text-white text-black flex">
            <span className="w-4 bg-black mx-2 title_box"> </span>
            Technology
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "}
          </h1>
          <ul className="cards">
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
