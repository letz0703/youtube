class YoutubeFetch {
  constructor(key) {
    this.key = key;
    const getRequestOptions = {
      method: "GET",
      redirect: "follow"
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=US&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    const items = result_1.items.map((item) => {
      // console.log(item);
      return { ...item, id: item.id.videoId };
    });
    return items;
  }
}

export default YoutubeFetch;
