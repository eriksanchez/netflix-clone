import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {}
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      {/**container -> posters */}
    </div>
  );
}

export default Row;
