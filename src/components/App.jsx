import { Route, Routes } from 'react-router';
import { ListCourses } from 'pages/ListCourses';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListCourses />}></Route>
    </Routes>
  );
};
