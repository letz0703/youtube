import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
  return (
    <header className={styles.header}>
      <logo>
        <img src="./images/logo.png" />
        <youtube> YOUTUBE</youtube>
      </logo>
      <input type="text" placeholder="search..." />
      <button type="submit">
        <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Search;
