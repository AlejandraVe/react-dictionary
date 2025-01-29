import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
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
    </div>
  );
}
