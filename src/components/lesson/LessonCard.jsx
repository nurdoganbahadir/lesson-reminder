import "./LessonCard.scss";
import React from "react";

const LessonCard = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default LessonCard;
