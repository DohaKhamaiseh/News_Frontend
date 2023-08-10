import Card from "@/components/Card";
import {useApi}  from "../hooks/useApi";

export default function Newsection () {
    const {data,loading} = useApi("news");

    return (
        <div>
            {loading ? 
                <h1>Loading...</h1> 
                :
                <ul className="cards">
                    {data.articles.slice(0, 8).map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </ul>
            }
        </div>
    );
    
}