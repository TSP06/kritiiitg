import React from "react";
import "./announcement.css";
import { GoDotFill } from "react-icons/go";

const Announcement = () => {
  return (
    <div className="announcements-container" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Announcements</h1>
      <div className="announcement" style={{display:"flex",gap:"5px"}}>
        <GoDotFill />
        <p>
          An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.
        </p>
      </div>
      <div className="announcement" style={{display:"flex",gap:"5px"}}>
        <GoDotFill />
        <p>
          An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.
        </p>
      </div>
      <div className="announcement" style={{display:"flex",gap:"5px"}}>
        <GoDotFill />
        <p>
          An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.
        </p>
      </div>
      <div className="announcement" style={{display:"flex",gap:"5px"}}>
        <GoDotFill />
        <p>
          An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.
        </p>
      </div>
    </div>
  );
};

export default Announcement;