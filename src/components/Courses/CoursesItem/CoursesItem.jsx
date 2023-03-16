import { HoverVideo } from 'components/HoverVideo/HoverVideo';

import { nanoid } from 'nanoid';
export const CoursesItem = ({ course }) => {
  const img = `${course.previewImageLink}/cover.webp`;

  return (
    <>
      <h2>{course.title}</h2>

      <HoverVideo
        src={course.meta.courseVideoPreview.link}
        img={img}
        alt={course.title}
      />

      <p>{course.description}</p>

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
