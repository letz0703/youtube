import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key }
    });
    // this.key = key;
    // const getRequestOptions = {
    //   method: "GET",
    //   redirect: "follow"
    // };
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 10
      }
    });

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 24,
        type: "video",
        q: query
      }
    });
    return response.data.items;
  }
}

export default Youtube;
