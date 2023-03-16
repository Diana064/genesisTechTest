import ReactPlayer from 'react-player';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export const CourseById = ({ course, handleGoBack }) => {
  const [played, setPlayed] = useLocalStorage('progressTime', {
    playedSeconds: 0,
  });
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(played.playedSeconds);
    }
    console.log(played);
  }, [playerRef.current]);

  function progressTime(e) {
    const progress = { ...played, playedSeconds: e };
    setPlayed(progress);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Equal') {
        setPlaybackRate(prevPlaybackRate => prevPlaybackRate + 0.25);
      } else if (event.code === 'Minus') {
        setPlaybackRate(prevPlaybackRate => prevPlaybackRate - 0.25);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {course && (
        <>
          <button type="button" onClick={handleGoBack}>
            go course
          </button>
          <h2>{course.title}</h2>
          <ReactPlayer
            ref={playerRef}
            playing={true}
            url={course?.meta?.courseVideoPreview?.link}
            type="video/hls"
            muted={true}
            controls
            onProgress={progress => {
              progressTime(progress.playedSeconds);
            }}
            pip={true}
            playbackRate={playbackRate}
          />
          <h2>
            How to change the volume using keyboard? Please click the
            "Instruction" button to learn more.
          </h2>

          <button
            type="button"
            onClick={() =>
              alert(
                'Please turn on the volume of the video, and then use the arrow keys Up/Down to increase/decrease the video volume.'
              )
            }
          >
            Instruction
          </button>
        </>
      )}
    </>
  );
};
