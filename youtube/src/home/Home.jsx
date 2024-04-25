import Featured from "../components/featured/featured";
import List from "../components/list/List";
import Navbar from "../components/navbar/navbar";
import "./home.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      console.log(type, genre);
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type: ""}${genre ? "&genre=" + genre: ""}`,{ 
            headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MThhNzRhOGM5OTM3MGI1M2E5MmJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDA0NzgyMywiZXhwIjoxNzE2NjM5ODIzfQ.q95ytWc4nYpDGUEQxKmMlJJoeTuQunVuf6nilottYw0"
            }

          }
        );
        setLists(res.data);
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
      <Featured type={type}  setGenre={setGenre}/>
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
