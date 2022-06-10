import React, { memo } from "react";

const Ytlist = memo((props) => {
  const ytem = props.ytlist.snippet;
  const { title, description } = ytem;
  return (
    <li>
      <div className="pl4">
        <h1>{title}</h1>
        <p className="f3">{description}</p>
      </div>
    </li>
  );
});

export default Ytlist;
