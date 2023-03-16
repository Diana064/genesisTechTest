import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { useRef } from 'react';
export const CourseById = ({ course, courseId, handleGoBack }) => {
  // взяла відео, такого ж формату як в зпиті виводить, тому, що лінк за запитом не працює, щоб продемонструвати роботу, {course.meta.courseVideoPreview.link} - запит для відео.

  const defaultSrc =
    'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

  const [played, setPlayed] = useLocalStorage('progressTime', {
    playedSeconds: 0,
  });

  function progressTime(e) {
    const progress = { ...played, playedSeconds: e };
    setPlayed(progress);
    console.log(progress);
  }

  return (
    <>
      {course && (
        <>
          <button type="button" onClick={handleGoBack}>
            go course
          </button>
          <h2>{course.title}</h2>
          <ReactPlayer
            playing={true}
            url={defaultSrc}
            type="video/hls"
            muted={true}
            controls
            onProgress={progress => {
              progressTime(progress.playedSeconds);
            }}
          />
        </>
      )}
    </>
  );
};
