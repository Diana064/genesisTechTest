import styled from 'styled-components';
import { FiLock, FiUnlock } from 'react-icons/fi';
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  padding: ${p => p.theme.gap[4]}px;
  color: ${p => p.theme.colors.text};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: ${p => p.theme.colors.backCourse};
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: ${p => p.theme.borders.big};
  border-color: ${p => p.theme.colors.border};
  &:hover {
    transform: scale(1.05);
    border-color: ${p => p.theme.colors.border};
  }
`;
export const LockIcon = styled(FiLock)`
  color: ${p => p.theme.colors.border};
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
export const UnLockIcon = styled(FiUnlock)`
  color: ${p => p.theme.colors.border};
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  border: none;
  background: none;
  font-size: ${p => p.theme.fontSizes.m};
  display: flex;
  align-items: flex-start;
  text-align: inherit;
  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
  }
`;
export const LockedLesson = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const CourseTitle = styled.h2`
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: ${p => p.theme.colors.title};
  margin-bottom: ${p => p.theme.gap[0]}px;
`;
export const LessonsList = styled.ul`
  width: 100%;
  margin: 0 auto;
`;
export const LessonsListItem = styled.li``;
