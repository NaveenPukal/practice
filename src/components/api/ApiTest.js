import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function ApiTest() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/")
      // Axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log("Getting from :::", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const arr = data.map((data, index) => {
  //   return (
  //     <tr>
  //       <td>{data.id}</td>
  //       <td>{data.title}</td>
  //       <td>{data.body}</td>
  //     </tr>
  //   );
  // });

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {data.map((data, index) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        ))}
        {/* {arr} */}
      </table>
    </div>
  );
}
