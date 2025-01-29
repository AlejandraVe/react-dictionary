import React, { useState } from "react";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchedWord}`);
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
