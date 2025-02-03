import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
  }
}
