import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <span>
        <p className="Examples">
          Example: <em>{props.examples}</em>
        </p>
      </span>
    );
  } else {
    return null;
  }
}
