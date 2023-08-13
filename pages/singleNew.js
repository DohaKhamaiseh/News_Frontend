import { Parent } from "@/components/Parent";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import useComment from "hooks/useComment";
import { useAuth } from "../context/auth";
import useNews from "@/hooks/useNews";
import Link from "next/link";

import { Button, Typography } from "@material-tailwind/react";
import Loader from "@/components/Loader";
import CommentSection from "@/components/CommentSection";
import Post from "@/components/Post";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function singleNew() {
  const [news, setNews] = useState({});

  const { createComment, fetchCommentNew } = useComment();
  const { createNews } = useNews();

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  async function handlecreate(event) {
    event.preventDefault();
    if (!news.id) {
      const newNews = createNews(news);

      const obj = {
        user: user.id,
        news: newNews.id,
        description: event.target.comm.value,
      };
      createComment(obj);
    } else {
      const obj = {
        user: user.id,
        news: news.id,
        description: event.target.comm.value,
      };
      createComment(obj);
    }
  }

  useEffect(() => {
    if (Cookies.get("news")) {
      setNews(JSON.parse(Cookies.get("news")));
      // console.log(news.id);
    }

    // const c = fetchCommentNew(news.id);
    // setNewsComment(c);
  }, []);

  return (
    <Parent>
      <div className="flex flex-col gap-14 dark:bg-bgDark bg-bgLight 2xl:px-40 pt-10">
        <Post data={news} />

        <div className="w-[32rem] pl-100 text-fontDark">
          <CommentSection id={news.id} />
        </div>
      </div>
    </Parent>
  );
}
