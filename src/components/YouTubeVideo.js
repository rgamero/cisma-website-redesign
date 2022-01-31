import React from 'react';

const YouTubeVideo = ({ videoSrcURL, videoTitle }) => {
  const getVideoID = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : false;
  };

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${getVideoID(videoSrcURL)}`}
        width="560"
        height="315"
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
