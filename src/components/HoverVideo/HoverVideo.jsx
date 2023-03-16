import { useState } from 'react';
import ReactPlayer from 'react-player';
export const HoverVideo = ({ src, img, alt }) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hover ? (
        <ReactPlayer playing={true} url={src} type="video/hls" />
      ) : (
        <img src={img} alt={alt} />
      )}
    </div>
  );
};
