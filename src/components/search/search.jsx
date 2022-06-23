import React, { useRef, memo } from "react";
import styles from "./search.module.css";
import { ReactComponent as SvgSearch } from "./search.svg";

const Search = memo(({ onSearch }) => {
  const refInput = useRef();
  const handleSearch = () => {
    const value = refInput.current.value;
    onSearch(value);
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
        <img src="./images/logo.png" className={styles.logo} alt="logo" />
        {/* <youtube> YOUTUBE</youtube> */}
      </div>
      <input
        type="text"
        placeholder="The World's Top 10 now!"
        onKeyPress={onKeyPress}
        ref={refInput}
      />
      <button type="submit" onClick={onClick}>
        {/* <img src="/images/search.png" alt="search" /> */}
        <SvgSearch className={styles.svg_search} />
      </button>
    </div>
  );
});

export default Search;
