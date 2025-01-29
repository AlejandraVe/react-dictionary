import React from "react";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p className="PartOfSpeech">{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em className="Examples">{definition.example}</em>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
