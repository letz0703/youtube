import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [video, setVideo] = useState([]);
  const [name, setName] = useState("letz");

  useEffect(() => {
    //paste postman code here
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
      />
      <div>
        <h1>Working!!!</h1>
      </div>
    </>
  );
}

export default App;
