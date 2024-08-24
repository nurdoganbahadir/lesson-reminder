import React from "react";

const Lesson = ({ data }) => {
  return (
    <div className="lesson-container">
      {data.map(({ id, name, hour, image }) => {
        return (
          <div key={id} className="lessons">
            <div className="lesson-image">
              <img src={image} alt={name} />
            </div>
            <div className="lesson-details">
              <p className="lesson-name">Lesson Name: {name}</p>
              <p className="lesson-hour">Lesson Hour: {hour}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Lesson;
