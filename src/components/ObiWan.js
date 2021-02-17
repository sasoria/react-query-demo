import React from "react";
import { useQuery } from "react-query";
import { fetcher, obiWanUrl } from "../api";

function ObiWan() {
  const { data: obiWan } = useQuery(obiWanUrl, fetcher);

  return (
    <h3>{obiWan?.name}</h3>
  );
}

export default ObiWan;
