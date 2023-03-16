import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CoursesList = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CourseItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  outline: 2px solid red;
`;
