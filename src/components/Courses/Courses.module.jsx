import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 630px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
`;
export const Title = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const CoursesList = styled.ul`
  gap: ${p => p.theme.gap[5]}px;
  margin-top: 30px;
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
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: ${p => p.theme.colors.backCourse};
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: center;
  border: ${p => p.theme.borders.big};
  border-color: ${p => p.theme.colors.border};
  &:hover {
    transform: scale(1.05);
    border-color: ${p => p.theme.colors.border};
  }
`;
export const CourseListWrapper = styled.div`
  margin: 30px auto;
`;
