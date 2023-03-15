import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as ImageService from '../services/api';
import { useLocation } from 'react-router-dom';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  //   const [cours, setCours] = useState([]);

  useEffect(() => {
    ImageService.getCourses().then(setCourses);

    console.log(courses);
  }, []);

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <NavLink to={`/course/${course.id}`} state={{ from: location }}>
            <h2>{course.title}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
