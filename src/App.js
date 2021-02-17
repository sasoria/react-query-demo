import React from "react";
import People from './components/People';
import { useIsFetching, useQuery } from "react-query";
import { fetcher, lukeUrl, obiWanUrl } from "./api";
import Button from "./components/Button";
import './App.css';

function App() {
  const { data: luke } = useQuery(lukeUrl, fetcher);
  const { data: obiWan } = useQuery(obiWanUrl, fetcher);
  const isFetching = useIsFetching();

  console.log(`Hello there ${luke?.name} and ${obiWan?.name}`);

  return (
    <div className="App">
      {isFetching ? <h1>"Loading..."</h1> : null}
      <People />
      <Button />
    </div>
  );
}

export default App;
