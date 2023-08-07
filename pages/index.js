import { Parent } from "@/components/Parent";
import Head from "next/head";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";

export default function Home() {
  // const { lang, langSetter } = useAuth();
  // const [lang, setLang] = useState("eng")

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Parent>
        {/* <div>
          {lang === "eng" ? <h1>hello</h1> : <h1>arabic</h1>}

          <button onClick={() => langSetter()}>
            {lang === "eng" ? "click" : "كبسة"}
          </button>
        </div> */}
      </Parent>
    </>
  );
}
