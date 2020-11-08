import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact/Contact";
import "./styles.css";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "5fa6c9b8d1eb0a385ca97203";

let con = new Array();

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
      .then(({ data }) => setData(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  con = data.data.map((obj) => (
    <Contact
      first={obj.firstName}
      last={obj.lastName}
      image={obj.picture}
      online={Math.random() >= 0.5}
    />
  ));

  return (
    <div className="App">
      {loading && "Loading..."}
      {con}
    </div>
  );
}
