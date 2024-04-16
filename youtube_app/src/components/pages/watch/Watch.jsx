import "./watch.scss";

import { ArrowBackOutlined } from "@mui/icons-material";
export default function Watch() {
    const trailer1 =
    "https://player.vimeo.com/video/845451645?h=28abcb82d4&autoplay=1&loop=1&title=0&byline=0";
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
    <iframe
     className="video"
     autoPlay
     progress
     controls
    src={trailer1}></iframe>
    </div>
  );
}