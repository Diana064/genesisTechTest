import ReactPlayer from 'react-player';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';

export const CourseById = ({ course, handleGoBack }) => {
  // взяла відео, такого ж формату як в зпиті виводить, тому, що лінк за запитом не працює, щоб продемонструвати роботу, {course.meta.courseVideoPreview.link} - запит для відео.

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
            url={course?.meta?.courseVideoPreview?.link}
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
