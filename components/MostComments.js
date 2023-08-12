import Card from "@/components/Card";
import useNews from "../hooks/useNews";
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import Loader from "./Loader";

export default function MostComments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function allNews() {
    const res = await axios.get(
      "https://news-back-end.vercel.app/api/v1/dailypulse/Get_all_News/"
    );
    setData(res.data);
    setLoading(false);
  }

  useEffect(() => {
    allNews();
  }, []);

  return (
    <>
      <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40">
        <h1 className="text-2xl dark:text-white text-black flex">
          <span className="w-4 bg-black mx-2 title_box"> </span>
          Comments
          <span className="pt-1 pl-1">
            {" "}
            <FaAngleRight />{" "}
          </span>{" "}
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="cards">
            {data.slice(0, 4).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
