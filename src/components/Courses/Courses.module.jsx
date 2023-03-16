import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CoursesList = styled.ul`
  gap: ${p => p.theme.gap[5]}px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
`;
export const CourseItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  width: 500px;
  outline: 2px solid red;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 10px;

  height: 570px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
`;
