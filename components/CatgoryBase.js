import React from "react";
import { useApi, useApi2 } from "@/hooks/useApi";

export default function CatgoryBase({ catgory }) {
  const { data, loading } = useApi(catgory);
  const { dataAr, loadingAr } = useApi2(catgory, "ar");
  return <div>{catgory}</div>;
}
