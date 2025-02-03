import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <p>
        <a href={props.phonetic.audio} target="_blank">
          {props.phonetic.text}
        </a>
      </p>
    );
  } else {
    return null;
  }
}
