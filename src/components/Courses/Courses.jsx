import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useLocation } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';
import { CoursesItem } from './CoursesItem/CoursesItem';
import { CoursesList, CourseItemWrapper, StyledLink } from './Courses.module';

// import { Pagination } from 'components/Pagination/Pagination';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [startIndex] = useState(1);
  const [endIndex] = useState(11);

  useEffect(() => {
    setLoading(true);
    ImageService.getCourses().then(setCourses);

    setLoading(false);
  }, []);

  return (
    <>
      <div>
        {!loading && (
          <>
            <CoursesList>
              {courses.slice(startIndex, endIndex).map(course => (
                <CourseItemWrapper key={course.id}>
                  <StyledLink
                    to={`/course/${course.id}`}
                    state={{ from: location }}
                  >
                    <CoursesItem course={course} />
                  </StyledLink>
                </CourseItemWrapper>
              ))}
            </CoursesList>
            <Pagination courses={courses} pageSize={10} />
          </>
        )}
      </div>
    </>
  );
};
