import Card from "@/components/Card";
import useNews from "../hooks/useNews";
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function MostComments() {
    const { fetchAllNews, isLoading } = useNews();
    const [data, setData] = useState([])

    async function allNews() {
        const res = await axios.get('https://news-back-end.vercel.app/api/v1/dailypulse/Get_all_News/')
        setData(res.data)
        console.log(res)
    }

   
    useEffect(() => {
   
        
        allNews()
    },[])


    return (
        <div className="dark:bg-bgDark  bg-white">
            {isLoading ?
                <h1>Loading...</h1>
                :
                <>
                    <h1 className="text-2xl dark:text-white text-black flex">
                        <span className="w-4 bg-black mx-2 title_box"> </span>
                        Comments
                        <span className="pt-1 pl-1"> <FaAngleRight /> </span> </h1>
                    <ul className="cards">
                        {data.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </ul>
                </>
            }
        </div>
    );

}