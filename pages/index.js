import { Parent } from "@/components/Parent";
import Head from "next/head";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Newsection from "@/components/Newsection";
import Trendingsection from "@/components/Trendingsection";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", ""])),
    },
  };
}

export default function Home() {
  // const { lang, langSetter } = useAuth();
  // const [lang, setLang] = useState("eng")
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Parent>
        <h1>{t("home:welcome_msg")}</h1>
        <h1>{t("home:Monday")}</h1>
        {/* <div>
          {lang === "eng" ? <h1>hello</h1> : <h1>arabic</h1>}

          <button onClick={() => langSetter()}>
            {lang === "eng" ? "click" : "كبسة"}
          </button>
        </div> */}
        <Newsection />
        <Trendingsection />
      </Parent>
    </>
  );
}
