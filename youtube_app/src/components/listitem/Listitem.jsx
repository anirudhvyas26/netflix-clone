import React, { useState } from "react"; // Import React
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.scss";

export default function Listitem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/video/845451645?h=28abcb82d4&autoplay=1&loop=1&title=0&byline=0";
  return (
    <>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} // Error: Fixed the ternary condition
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERdQxBn8u-9JVamd3zqWONXsxtWLC5nWYMw&s"
          alt=""
        />

        {isHovered && (
          <>
            <iframe
              src={trailer}
              width="325"
              height="120"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <iframe width="325" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/}
            {/*<video src={trailer} autoPlay={true} loop />*/}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span> 1hr 15mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="genre">Action</div>
              {/* Moved this line inside the condition */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
