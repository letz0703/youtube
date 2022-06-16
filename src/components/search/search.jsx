import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
  return (
    <search className={styles.search}>
      <logo>
        <img src="./images/logo.png" />
        {/* <youtube> YOUTUBE</youtube> */}
      </logo>

      <input type="text" placeholder="search... @youtube" />
      <button type="submit">
        <img src="/images/search.png" alt="search" />
      </button>
    </search>
  );
};

export default Search;
