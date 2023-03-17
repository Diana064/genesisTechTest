import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { TextSubtitle, Img } from './LessonsData.module';
export const LessonData = ({ lesson }) => {
  const playbackRate = usePlaybackRate(1);
  const defaultSrc =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const img = lesson?.previewImageLink
    ? `${lesson.previewImageLink}/${lesson.order}.webp`
    : 'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png';

  const [lessonPlayed, setLessonPlayed] = useLocalStorage('lessonTime', {
    playedSeconds: 0,
  });

  const lessonRef = useRef(null);

  useEffect(() => {
    if (lessonRef.current) {
      lessonRef.current.seekTo(lessonPlayed.playedSeconds);
    }
  }, [lessonPlayed.playedSeconds]);

  function lessonTime(e) {
    const progress = { ...lessonPlayed, playedSeconds: e };
    setLessonPlayed(progress);
  }
  console.log(lesson);
  return (
    <>
      {lesson && (
        <>
          <p>
            <TextSubtitle>Number of lesson</TextSubtitle>
            {lesson.duration}
          </p>

          <p>
            <TextSubtitle>Photo of lesson</TextSubtitle>
            <Img src={img} width="300" height="200" alt="img of lesson" />
          </p>
          <p>
            <TextSubtitle>Video of lesson</TextSubtitle>
          </p>
          <ReactPlayer
            ref={lessonRef}
            playing={false}
            muted={true}
            url={lesson?.link ? lesson.link : defaultSrc}
            type="video/hls"
            controls
            onProgress={progress => {
              lessonTime(progress.playedSeconds);
            }}
            pip={true}
            playbackRate={playbackRate}
          />
        </>
      )}
    </>
  );
};
