import { Link, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/mughilarasu')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div style={{ margin: "0px auto" }}>
      <img src={data.avatar_url} width={300} alt="" />
      <Typography variant="h3">
        <a href={data.blog} target="_blank">
          {data.blog}
        </a>
      </Typography>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mughilarasu");
  return response.json();
};
