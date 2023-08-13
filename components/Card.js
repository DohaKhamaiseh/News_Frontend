import Link from "next/link";
import Cookies from "js-cookie";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";

export default function Card({ item }) {
  const { user } = useAuth();
  const router = useRouter();

  function singleNew(item) {
    if (!user) {
      router.push("/signin");
      return;
    }

    Cookies.set("news", JSON.stringify(item));
    if (item.id) {
      Cookies.set("news_id", JSON.stringify(item.id));
    }
    router.push("singleNew");
  }
  return (
    <li className="cards_item dark:bg-bgDark pt-10 bg-bgLight ">
      <div onClick={() => singleNew(item)}>
        {/* <a href={item.url}> */}
        <div className="card_news">
          <div className="card_image">
            <img
              src={
                item.urlToImage ||
                item.url_image ||
                "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
              }
            />
          </div>
          <div className="card_content_news ">
            <p className="card_title dark:text-white text-black">
              {item.title}
            </p>

            {/* <a href ={item.url}> <button className="btn card_btn dark:text-white text-black border-black dark:border-white hover:bg-slate-600" >Read More</button> </a> */}
          </div>
        </div>
        {/* </a> */}
      </div>
    </li>
  );
}
