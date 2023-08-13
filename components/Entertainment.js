import React from "react";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "./Loader";
import CardSmall from "./CardSmall";
import { useRouter } from "next/router";

export default function Entertainment() {
  const router = useRouter();
  const { data } = useApi("entertainment");
  const { dataAr } = useApi2("entertainment", "ar"); // en or ar from cookies
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data || dataAr) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <h1 className="text-2xl dark:text-white text-black flex  pt-10  ">
            <span className="w-4 bg-black mx-2 title_box"> </span>
            Entertainment
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "}
          </h1>
          <ul className="cards  ">
            {Cookies.get("lang") ? (
              <>
                {dataAr.articles.slice(0, 4).map((item, index) => (
                  <CardSmall key={index} item={item} />
                ))}
              </>
            ) : (
              <>
                {data.articles.slice(0, 4).map((item, index) => (
                  <CardSmall key={index} item={item} />
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
