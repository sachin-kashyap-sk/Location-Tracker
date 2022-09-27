import React from "react";
import "./Marker.css";

const Markers = (props) => {
  const { color, name } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  );
};

export default Markers;
