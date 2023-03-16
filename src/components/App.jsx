import { Route, Routes } from 'react-router';
import { ListCourses } from 'pages/ListCourses';
import { CurrentCourse } from 'pages/CurrentCourse';
import { Lessons } from './CourseById/Lessons/Lessons';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListCourses />} />
      <Route path="/course/:courseId" element={<CurrentCourse />}>
        <Route path="lessons" element={<Lessons />} />
      </Route>
    </Routes>
  );
};
