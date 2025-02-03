import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic.audio);
  if (props.phonetic.text) {
    return (
      <p className="mb-0 Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
        <span className="text-phonetic">{props.phonetic.text}</span>
      </p>
    );
  } else {
    return null;
  }
}
