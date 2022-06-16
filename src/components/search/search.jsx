import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = () => {
  const refInput = useRef();

  const handleSearch = () => {
    const value = refInput.current.value;
    console.log(value);
    // onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.search}>
      <div className={styles.logo}>
        <img src="./images/logo.png" className={styles.logo} />
        {/* <youtube> YOUTUBE</youtube> */}
      </div>
      <input
        type="text"
        placeholder="search... @youtube"
        onKeyPress={onKeyPress}
        ref={refInput}
      />
      <button type="submit" onClick={onClick}>
        <img src="/images/search.png" alt="search" />
      </button>
    </div>
  );
};

export default Search;
