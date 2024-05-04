import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {

        const res = await axios.get("http://localhost:8800/api/users?new=true", {
          head: {
            Authorization:
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MThhNzRhOGM5OTM3MGI1M2E5MmJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDU3NTkzNCwiZXhwIjoxNzE3MTY3OTM0fQ.A2DFlEKKOvsSEUbnJe81_gO_agJFoNSkZxWtQesg8-k"
    
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilepic ||
                "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
