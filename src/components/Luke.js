import React from "react";
import { useQuery } from "react-query";
import { fetcher, lukeUrl } from "../api";

function Luke() {
  const { data: luke } = useQuery(lukeUrl, fetcher);

  return (
    <h3>{luke?.name}</h3>
  );
}

export default Luke;
