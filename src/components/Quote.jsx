import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [data, setData] = useState(null);
  const api_url =
    "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_url);
        setData(response.data[0]["q"]);
        console.log(data);
      } catch (error) {
        setData(null);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-3xl font-[Dawning_of_a_New_Day] max-w-xs">
      <p>{data ? JSON.stringify(data, null, 2) : <p>Retrieving quote</p>}</p>
    </div>
  );
}

export default Quote;
