import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");
  let [results, setResults] = useState(null);

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Write a word..."
          onChange={handleSearchedWord}
        ></input>
      </form>
      <Results information={results} keyword={searchedWord} />
    </div>
  );
}
