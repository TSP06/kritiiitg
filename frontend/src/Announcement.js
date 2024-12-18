import React, { useEffect, useState } from "react";
import { client } from "./sanityClient"; // Correctly import client as default export
import "./announcement.css";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const query = `*[_type == "announcement"] | order(_createdAt desc) {
        date,
        content
      }`;
      try {
        const data = await client.fetch(query);
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []); // The empty array ensures this only runs once when the component mounts


  

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(); // Adjust format as per your needs
  };

  return (
    <div className="announcements-container" id="announcements">
      <h1>Announcements</h1>
      {announcements.length > 0 ? (
        announcements.map((announcement, index) => (
          <div className="announcement" key={index}>
            <div className="date">{formatDate(announcement.date)}</div>
            <div className="content">
              <p>{announcement.content}</p> {/* Updated field from 'text' to 'content' */}
            </div>
          </div>
        ))
      ) : (
        <p>No announcements available</p>
      )}
      <div className="bgcolor1"></div>
      <div className="white-line"></div> {/* The white line */}
    </div>
  );
};

export default Announcement;
