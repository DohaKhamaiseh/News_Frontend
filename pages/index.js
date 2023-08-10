import { Parent } from "@/components/Parent";
import Head from "next/head";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Newsection from "@/components/Newsection";
import Trendingsection from "@/components/Trendingsection";
import TechSection from "@/components/TechSection";
import MostComments from "@/components/MostComments";
import NavBar from "@/components/NavBar";
import CatgoryBase from "@/components/CatgoryBase";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", ""])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");
  useEffect(() => {}, [category]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Parent>
        <NavBar setCategory={setCategory} />

        {category == "all" ? (
          <>
            <Newsection />
            <Trendingsection />
            <TechSection />
            <MostComments />
          </>
        ) : (
          <CatgoryBase catgory={category} />
        )}
      </Parent>
    </>
  );
}
