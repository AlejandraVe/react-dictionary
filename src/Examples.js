import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div>
        <p className="Examples">
          Example: <em>{props.examples}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
