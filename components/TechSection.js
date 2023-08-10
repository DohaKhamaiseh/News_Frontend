import Card from "@/components/Card";
import { useApi } from "../hooks/useApi";
import { FaAngleRight } from "react-icons/fa";

export default function TechSection() {
    const { data, loading } = useApi("technology");

    return (
        <div className="dark:bg-bgDark bg-white">
            {loading ?
                <h1>Loading...</h1>
                :
                <>
                    <h1 className="text-2xl dark:text-white text-black flex">
                        <span className="w-4 bg-black mx-2 title_box"> </span>
                        Technology
                        <span className="pt-1 pl-1"> <FaAngleRight /> </span>
                    </h1>
                    <div className="cards-container">
                        {data.articles.slice(0, 4).map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </>
            }
        </div>
    );
}
