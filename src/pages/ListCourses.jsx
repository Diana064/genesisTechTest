import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';

export const ListCourses = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ImageService.getTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <div>Hi!</div>
    </>
  );
};
