import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.information) {
    return (
      <div>
        <h1 className="Keyword mt-4 mb-0">{props.information.word}</h1>
        {props.information.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        <Phonetics props={props.information.phonetic} />
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
