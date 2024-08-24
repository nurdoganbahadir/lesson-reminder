import Lesson from "./Lesson";
import "./LessonCard.scss";
import React from "react";
import { data } from "../../helper/data";

const LessonCard = () => {
  return (
    <div className="container">
      <h1 className="lesson-header">Lesson Reminder</h1>
      <Lesson data={data} />
    </div>
  );
};

export default LessonCard;
