import React, { memo } from "react";

const Ytlist = memo((props) => {
  const ytem = props.ytlist.snippet;
  const { title, description } = ytem;
  return (
    <li>
      <div className="">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </li>
  );
});

export default Ytlist;
