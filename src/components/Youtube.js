import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  render() {
    const opts = {
      alignItems: "center",
      height: "600px",
      width: "100%",

      playerVars: {
        autoplay: 1,
      },
    };
    const { videoId } = this.props;

    return <YouTube videoId={videoId} opts={opts} onReady={videoId} />;
  }

  onReady(event) {
    event.target.pauseVideo();
  }
}
export default Youtube;
