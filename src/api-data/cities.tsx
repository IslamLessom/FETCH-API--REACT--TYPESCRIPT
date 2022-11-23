import React, { FormEvent, useEffect, useState } from "react";

type resultProps = {
  id: string;
  l: string;
  q: string;
  rank: number;
  s: string;
  y: number;
  yr: string;
};

const Cities = () => {
  const [data, setData] = useState<resultProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [errorStateValue, setErrorStateValue] = useState<undefined>(undefined);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "351ebdbb1emsh76b96b8bb53643ep1b3540jsna0d5bf6e4357",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    CitiesData();
  }, [setData, search, setErrorStateValue]);

  const CitiesData = async () => {
    await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=+${search}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response.d || []))
      .catch((err) => setErrorStateValue(err.message));
  };

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleFormEvent = (e: FormEvent<HTMLFormElement>) => {
    return e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleFormEvent}>
        <input placeholder="search" value={search} onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form>

      {data.map((item) => (
        <h1 key={item.id}>{item.l}</h1>
      ))}
    </>
  );
};

export default Cities;
