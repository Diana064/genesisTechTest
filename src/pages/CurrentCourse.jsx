import { CourseById } from 'components/CourseById/CourseById';
import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
export const CurrentCourse = () => {
  const [course, setCourse] = useState([]);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ImageService.getCoursById(courseId);
        setCourse(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [courseId]);
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!course) {
    return;
  }

  return (
    <>
      {!isLoading && (
        <>
          <CourseById
            course={course}
            handleGoBack={handleGoBack}
            isLoading={isLoading}
          />
          <NavLink to="lessons" state={location.state}>
            Lessons
          </NavLink>
          <Outlet />
        </>
      )}
    </>
  );
};
