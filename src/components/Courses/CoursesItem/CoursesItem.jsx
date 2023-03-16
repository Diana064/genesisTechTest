import ReactPlayer from 'react-player';
import { HoverVideo } from 'components/HoverVideo/HoverVideo';
import HoverVideoPlayer from 'react-hover-video-player';
import { nanoid } from 'nanoid';
export const CoursesItem = ({ course }) => {
  const img = `${course.previewImageLink}/cover.webp`;
  return (
    <>
      <h2>{course.title}</h2>
      {/* <HoverVideoPlayer
        videoSrc={{
          type: 'video/hls',
          src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        }}
        pausedOverlay={
          <img
            src={img}
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      /> */}
      {/* <ReactPlayer url={course.meta.courseVideoPreview.link} type="video/hls" /> */}
      <HoverVideo
        src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
        img={img}
        alt={course.title}
      />

      <p>{course.description}</p>
      <p>{course.meta.courseVideoPreview.link}</p>
      <ul>
        <li>{course.lessonsCount}</li>
        <li>{course.rating}</li>
        <li>
          <ul>
            {course.meta.skills.map(skill => (
              <li key={nanoid()}>{skill}</li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};
