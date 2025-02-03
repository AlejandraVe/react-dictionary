import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <p>
          <strong>Synonyms:</strong>
        </p>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li key={index}>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
