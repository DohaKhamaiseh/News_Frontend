import { Parent } from "@/components/Parent";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function singleNew() {
  const [news, setNews] = useState({});

  useEffect(() => {
    if (Cookies.get("news")) {
      setNews(JSON.parse(Cookies.get("news")));
      console.log(JSON.parse(Cookies.get("news")));
      console.log(news.url_image);
    }
  }, []);
  return (
    <Parent>
      <div className="">
        <img src={news.url_image} />
      </div>
    </Parent>
  );
}
