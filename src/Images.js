import React from "react";
import "./App.css";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="Meaning pt-3">
        <p className="PartOfSpeech abril-fatface-regular">images</p>
        <div className="row m-1">
          {props.images.map(function (image, index) {
            if (index < 9) {
              return (
                <div className="col-4">
                  <a href={image.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={image.src.landscape}
                      key={index}
                      className="img-fluid mt-1 mb-1 rounded shadow-sm border"
                      alt="Searched Word"
                    ></img>
                  </a>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className="col-3"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
