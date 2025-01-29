import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.information);

  if (props.information) {
    return (
      <div>
        <h1 className="Keyword mt-4">{props.information.word}</h1>
        {props.information.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <p></p>
      </div>
    );
  } else {
    return null;
  }
}
