import { HoverVideo } from 'components/HoverVideo/HoverVideo';

import { CourseTitle } from './CoursesItem.module';

import { nanoid } from 'nanoid';
export const CoursesItem = ({ course }) => {
  const img = `${course.previewImageLink}/cover.webp`;
  const {
    title = 'Missing title',
    lessonsCount = 'Missing lessonsCount',
    rating = 'Missing rating',
    description = 'Missing description',
    meta: { skills } = 'Missing skills',
  } = course;

  return (
    <>
      <CourseTitle>{title}</CourseTitle>

      <HoverVideo
        src={course.meta.courseVideoPreview.link}
        img={img}
        alt={course.title}
      />

      <p>{description}</p>

      <ul>
        <li>{lessonsCount}</li>
        <li>{rating}</li>
        <li>
          <ul>
            {skills ? (
              skills.map(skill => <li key={nanoid()}>{skill}</li>)
            ) : (
              <p>Missing skills</p>
            )}
          </ul>
        </li>
      </ul>
    </>
  );
};
