import Card from "@/components/Card";
import { fetchAllNews } from "../hooks/useNews";
import { FaAngleRight } from "react-icons/fa";

export default function MostComments() {
    const { data, loading } = fetchAllNews();

    return (
        <div className="dark:bg-bgDark  bg-white">
            {loading ?
                <h1>Loading...</h1>
                :
                <>

                    <h1 className="text-2xl dark:text-white text-black flex">
                        <span className="w-4 bg-black mx-2 title_box"> </span>
                        Comments
                        <span className="pt-1 pl-1"> <FaAngleRight /> </span> </h1>
                    <ul className="cards">
                        {data.articles.slice(0, 4).map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </ul>
                </>
            }
        </div>
    );

}