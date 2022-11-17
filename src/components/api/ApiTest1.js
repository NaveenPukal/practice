import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function ApiTest1() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/posts/")

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {data.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
