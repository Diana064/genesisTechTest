import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
export const CurrentCourse = () => {
  const [course, setCourse] = useState([]);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  //   const [cours, setCours] = useState([]);

  useEffect(() => {
    ImageService.getCoursById(courseId).then(setCourse);
  }, [courseId]);
  const handleGoBack = () => {
    navigate(location.state.from);
  };
  if (!course) {
    return;
  }
  return (
    <>
      <button type="button" onClick={handleGoBack}></button>
      <h2>{course.title}</h2>
    </>
  );
};
