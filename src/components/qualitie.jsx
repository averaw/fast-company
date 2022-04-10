import React from "react";

function Quality(props) {
  return (
      <span className={`badge bg-${props.color} m-1`}>
          {props.name}
      </span>
  );
}

export default Quality;



