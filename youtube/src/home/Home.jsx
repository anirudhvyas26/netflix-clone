import Featured from "../components/featured/featured";
import List from "../components/list/List";
import Navbar from "../components/navbar/navbar";
import "./home.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists ${type ? "?type=" + type: " "} &${genre ? "&genre=" + genre: ""}`,{ 
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MThhNzRhOGM5OTM3MGI1M2E5MmJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzg5NzE5MSwiZXhwIjoxNzE2NDg5MTkxfQ.HGDuyO_avhbXR0oZ4F5bdKOEdUmJ5jeQjL4AW9PXwD8"
            }

          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
