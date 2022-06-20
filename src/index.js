import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Youtube from "./services/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App className="app" youtube={youtube} />
  // </React.StrictMode>
);
