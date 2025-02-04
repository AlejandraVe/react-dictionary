import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./App.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    let imagesApiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchedWord}&key=${imagesApiKey}`;

    axios.get(apiUrl).then(handleResponse);
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="pb-4 border-bottom">
          <input
            className="Form"
            type="search"
            placeholder="Write a word..."
            onChange={handleSearchedWord}
          ></input>
        </form>
        <Results information={results} keyword={searchedWord} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
  }
}
