import React from "react";
// import VideoContainer from "./VideoContainer";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2">
      <div className="w-48">
        {" "}
        {/* Set the width to ensure uniform size */}
        <img
          className="rounded-lg w-full" // w-full to make it take full width of the container
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul className="w-full">
          <li className="font-bold">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
