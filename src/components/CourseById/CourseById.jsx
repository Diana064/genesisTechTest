import ReactPlayer from 'react-player';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { useEffect } from 'react';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import { useRef } from 'react';
import { InstructionVolume } from './InstructionVolume/InstructionVolume';
import { CourseData } from './CourseData/CourseData';
import {
  IconGoBack,
  Button,
  Title,
  VideoWrapper,
  ContenxtWrapper,
  TitleWrapper,
  ContentWrapper,
} from './СourseById.module';
import { Lessons } from './Lessons/Lessons';

export const CourseById = ({ course, handleGoBack }) => {
  const [played, setPlayed] = useLocalStorage('progressTime', {
    playedSeconds: 0,
  });
  const playbackRate = usePlaybackRate(1);

  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(played.playedSeconds);
    }
  }, [playerRef.current]);

  function progressTime(e) {
    const progress = { ...played, playedSeconds: e };
    setPlayed(progress);
  }

  return (
    <>
      {course && (
        <ContentWrapper>
          <TitleWrapper>
            <Button type="button" onClick={handleGoBack}>
              <IconGoBack />
              Go back
            </Button>
            <Title>{course.title}</Title>
          </TitleWrapper>
          <ContenxtWrapper>
            <VideoWrapper>
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
              <InstructionVolume />
            </VideoWrapper>
            <CourseData course={course} handleGoBack={handleGoBack} />
          </ContenxtWrapper>
          <Lessons course={course} />
        </ContentWrapper>
      )}
    </>
  );
};
