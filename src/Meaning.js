import React from "react";
import "./App.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props) {
    return (
      <div className="Meaning">
        <p className="PartOfSpeech abril-fatface-regular">
          {props.meaning.partOfSpeech}
        </p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <span key={index}>
              <ul className="Definition">
                <li>
                  {definition.definition}
                  <Examples examples={definition.example} />
                </li>
              </ul>
            </span>
          );
        })}
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
