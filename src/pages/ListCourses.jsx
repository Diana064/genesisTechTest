import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';

export const ListCourses = () => {
  const [, setCourses] = useState([]);

  useEffect(() => {
    ImageService.getCourses().then(setCourses);
  }, []);
  return (
    <>
      <div>Hi!</div>
    </>
  );
};
