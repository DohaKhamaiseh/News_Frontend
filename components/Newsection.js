import Card from "@/components/Card";
import { useApi } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";
import Loader from "./Loader";
import { useEffect, useState } from "react";

export default function Newsection() {
  const { data } = useApi("news");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <h1 className="text-2xl dark:text-white text-black flex">
            {" "}
            <span className="w-4 bg-black mx-2 title_box"> </span>News{" "}
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "}
          </h1>
          <ul className="cards">
            {data.articles.slice(0, 8).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
