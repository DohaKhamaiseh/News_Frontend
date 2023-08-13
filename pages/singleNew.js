import { Parent } from "@/components/Parent";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import useComment from "hooks/useComment";
import { useAuth } from "../context/auth";
import Loader from "@/components/Loader";
import Card from "@/components/Card";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
export default function singleNew() {
  const [news, setNews] = useState({});
  const { createComment, fetchCommentNew } = useComment(news.id)
  const { user } = useAuth();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (Cookies.get("news")) {
      setNews(JSON.parse(Cookies.get("news")));
      // console.log(JSON.parse(Cookies.get("news")));
      // console.log(news.url_image);
    }
  }, []);

  async function handlecreate(event) {
    event.preventDefault();
    const obj = {
      user_id: user?.id,
      news_id: news.id,
      description: event.target.comm.value,
    };
    if (news.id) {
      createComment(obj);
      handlefetch();
    }
  }

  async function handlefetch() {
    const fetchedComment = await fetchCommentNew(news.id);
    setComment(fetchedComment);
  }


  return (
    <Parent>
      <div className="">
        <img src={news.url_image} />
        <h1>{news.id}</h1>

        <div>
          {/* {comment} */}
          {/* {comment.map((item) => (
            <div key={item.id}>
              {item.title}
            </div>
          ))} */}
        </div>

      </div>
      {user ? (<form onSubmit={handlecreate}>
        <div className="mb-4 md:mr-2 md:mb-0">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Comments
          </label>
          <input
            // className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            // id="text"
            type="text"
            name="comm"
            required
          />
          <button>
            Create
          </button>
        </div>
      </form>
      ) : ("")}



    </Parent>
  );
}