import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <p className="Synonyms abril-fatface-regular">
          <strong>synonyms:</strong>
        </p>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul className="Synonyms-list">
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
