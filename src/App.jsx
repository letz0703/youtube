import React, { Component } from "react";
import "./App.css";
import YtList from "./components/ytlist";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          kind: "youtube#searchResult",
          etag: "NslzT8APA_D9Ocnnx_D4wQBsb2o",
          id: {
            kind: "youtube#video",
            videoId: "4kvC2gxoH80",
          },
          snippet: {
            publishedAt: "2020-09-08T13:24:17Z",
            channelId: "UCuw1hxBo5mDVUhgMzRDk3aw",
            title:
              "비주얼 원탑❀ 배우 김사랑 등장 미모 실화?? | [아내의 맛] 114회 | TV CHOSUN 20200908 방송",
            description:
              "김사랑 앞에서 고해성사(?)하는 긴장한 혀늬ㅋㅋ [아내의 맛 - 114회] #TV조선 #아내의맛 #부부 #박명수 #아내의맛 공식 페이지 ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4kvC2gxoH80/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/4kvC2gxoH80/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/4kvC2gxoH80/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "TVCHOSUN - TV조선",
            liveBroadcastContent: "none",
            publishTime: "2020-09-08T13:24:17Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "O6IA7Pl11ufXplhMqN5-5l4NsK4",
          id: {
            kind: "youtube#video",
            videoId: "3BORcIf2Yo8",
          },
          snippet: {
            publishedAt: "2022-03-02T11:00:26Z",
            channelId: "UC0mwtx068PEAw8-LvzRKiWQ",
            title:
              "김사랑 옆에서 발각된 존잘남의 충격적인 정체 (Feat.결혼설 터진 남성)",
            description:
              "연예인들의 알려지지 않은 비하인드 스토리를 소개합니다. #김사랑 Music: Escape - Atch https://soundcloud.com/atch-music ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/3BORcIf2Yo8/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/3BORcIf2Yo8/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/3BORcIf2Yo8/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "비하인드 ",
            liveBroadcastContent: "none",
            publishTime: "2022-03-02T11:00:26Z",
          },
        },
      ],
    };
  }

  render() {
    const { items } = this.state;
    const ytlist = [...items];
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <YtList items={ytlist} />
      </div>
    );
  }
}
