import React from "react";
import { useEffect, useState } from "react";

import Card from "./Card";
import CardSmall from "./CardSmall";
import { useApi2, useApi } from "@/hooks/useApi";
import Cookies from "js-cookie";
import CarouselC from "./CarouselC";
function HeroSection() {
  const { data, loading } = useApi("sports");
  const { dataAr, loadingAr } = useApi2("sports", "ar");

  return (
    <>
      {loadingAr ? (
        <h2>loading..</h2>
      ) : (
        <div className="flex gap-10 py-10 bg-bgLight dark:bg-bgDark px-80">
          {Cookies.get("lang") ? (
            <>
              <CarouselC data={dataAr} loading={loadingAr} />
              <div className="flex flex-col">
                {dataAr.articles.slice(5, 8).map((item) => (
                  <CardSmall item={item} />
                ))}
              </div>
            </>
          ) : (
            <>
              <CarouselC data={data} loading={loading} />
              <div className="flex flex-col">
                {data.articles.slice(5, 8).map((item) => (
                  <CardSmall item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HeroSection;
