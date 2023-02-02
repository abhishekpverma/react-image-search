import React, { useState } from "react";
import { Sresults } from "./Sresults";

export const Search = () => {
  const [img, setImg] = useState("");
  const imgEvent = (event) => {
    console.log(event.target.value);
    setImg(event.target.value);
  };
  return (
    <>
      <h1>Image Searching App</h1>
      <input
        type="text"
        placeholder="Search"
        value={img}
        onChange={imgEvent}
      />
      {img === "" ? <h2>Search Something...</h2> : <Sresults name={img} />}
    </>
  );
};
