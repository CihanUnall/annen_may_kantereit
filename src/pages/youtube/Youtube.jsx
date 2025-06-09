import React from "react";
import ReactPlayer from "react-player";

export default function Youtube() {
  return (
    <div>
      <h3>Oft Gefragt</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=cjjhlU4nD04" controls />
      <h3>Barfuß am Klavier</h3>

      <ReactPlayer url="https://www.youtube.com/watch?v=tERRFWuYG48" controls />
      <h3>Pocahontas</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=DraA3PUuoQc" controls />
    </div>
  );
}
