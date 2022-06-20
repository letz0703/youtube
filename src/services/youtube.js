class Youtube {
  constructor(key) {
    this.key = key;
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  }

  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.etag }))
      )
      .then((items) => items);
  }
}

export default Youtube;
