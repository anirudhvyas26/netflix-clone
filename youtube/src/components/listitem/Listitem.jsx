import React, { useEffect, useState } from "react"; // Import React
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.scss";
import axios from "axios";



export default function Listitem({ index, item }) {
  const [movie, setMovie] = useState({});
  const [isHovered, setIsHovered] = useState(false); // Add state for hover

  useEffect(() => {
    const getMovie = async () => {
      // this may throw an error appu bhaiya !! heads up
      const url = "http://localhost:8800/api/featured/"  
      try {
        const res = await axios.get(url + item, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MThhNzRhOGM5OTM3MGI1M2E5MmJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDA0NzgyMywiZXhwIjoxNzE2NjM5ODIzfQ.q95ytWc4nYpDGUEQxKmMlJJoeTuQunVuf6nilottYw0"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} // Error: Fixed the ternary condition
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />

        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
              {/* Moved this line inside the condition */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
