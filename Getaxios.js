import React, { useEffect, useState } from "react";
import Axios from "axios";
function Getaxios() {
  var [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    });
  });
  return (
    <>
      {data.map((info) => {
        var { id, name, email } = info;
        return (
          <>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
          </>
        );
      })}
    </>
  );
}

export default Getaxios;
