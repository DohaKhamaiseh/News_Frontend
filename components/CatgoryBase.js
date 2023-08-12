import React from "react";
import { useApi, useApi2 } from "@/hooks/useApi";
import Cookies from "js-cookie";
import CarouselC from "./CarouselC"; 

export default function CatgoryBase({ catgory }) {
  const { data, loading } = useApi(catgory);
  const { dataAr, loadingAr } = useApi2(catgory, "ar");


  return (
    <>
      {Cookies.get("lang") ? (
        <CarouselC data={dataAr} />
      ) : (
        <CarouselC data={data} />
      )}
    </>
  );
}
