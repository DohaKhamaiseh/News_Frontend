import React from "react";
import Carouselcat from "./Carouselcat";
import { useApi, useApi2 } from "@/hooks/useApi";
import Cookies from "js-cookie";
import Catgorysection from "./Catgorysection";

export default function CatgoryBase({ catgory }) {
  const { data, loading } = useApi(catgory);
  const { dataAr, loadingAr } = useApi2(catgory, "ar");
  return <div className="dark:bg-bgDark pt-10 bg-white 2xl:px-40">
    {Cookies.get("lang") ? 
    (<>
    
      <Carouselcat data={dataAr} loading={loadingAr}/>
      <Catgorysection data={dataAr} loading={loadingAr}/>


    </>)
    
    : (<>
   
    <Carouselcat data={data} loading={loading} /> 
    <Catgorysection data={data} loading={loading}/>
    
    </>)}



  </div>;
}
