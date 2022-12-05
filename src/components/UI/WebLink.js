import React from "react";

const WebLink = ({ title, link }) => {
  return (
    <a
      style={{ color: "#58A6FF", fontSize: 20, fontWeight: "bold" }}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
};

export default WebLink;
