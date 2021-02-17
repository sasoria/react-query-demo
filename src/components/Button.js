import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../api";
import { lukeUrl, obiWanUrl } from "../api";
import useMutatePerson from "../hooks/useMutatePerson";

const replaceLuke = (obiWan, mutation) => {
  mutation.mutate(obiWan);
};

function Button() {
  const { data: obiWan } = useQuery(obiWanUrl, fetcher);
  const { data: luke } = useQuery(lukeUrl, fetcher);
  const mutation = useMutatePerson();

  return (
    <button onClick={() => replaceLuke(obiWan, mutation)}>Bye {luke?.name}</button>
  );
}

export default Button;
