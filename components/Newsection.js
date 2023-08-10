import Card from "@/components/Card";
import { useApi } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";

export default function Newsection() {
  const { data, loading } = useApi("news");

  return (
    <div className="dark:bg-bgDark pt-10 bg-white">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {" "}
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
