import { HoverVideo } from 'components/HoverVideo/HoverVideo';

import { nanoid } from 'nanoid';
export const CoursesItem = ({ course }) => {
  const img = `${course.previewImageLink}/cover.webp`;
  // взяла відео, такого ж формату як в зпиті виводить, тому, що лінк за запитом не працює, щоб продемонструвати роботу, {course.meta.courseVideoPreview.link} - запит для відео.
  const defaultSrc =
    'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
  return (
    <>
      <h2>{course.title}</h2>

      <HoverVideo src={defaultSrc} img={img} alt={course.title} />

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
