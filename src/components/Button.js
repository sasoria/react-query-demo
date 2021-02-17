import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../api";
import { lukeUrl, obiWanUrl } from "../api";
import useMutatePerson from "../hooks/useMutatePerson";

const onClick = (obiWan, mutation) => {
  mutation.mutate(obiWan);
};

function Button() {
  const { data: obiWan } = useQuery(obiWanUrl, fetcher);
  const { data: luke } = useQuery(lukeUrl, fetcher);
  const mutation = useMutatePerson(obiWan?.name);

  return (
    <button onClick={() => onClick(obiWan, mutation)}>Bye {luke?.name}</button>
  );
}

export default Button;
