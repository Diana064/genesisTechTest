import styled from 'styled-components';

// export const Courses = styled.ul`

//   /* color: ${p => p.theme.colors.text};
//   font-size: ${p => p.theme.fontSizes.l};
//   margin-bottom: ${p => p.theme.space[4]}px; */
// `;
//   gap: 10px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: baseline;
// `;
export const CourseTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: ${p => p.theme.colors.title};
  margin-top: ${p => p.theme.gap[3]}px;
  margin-bottom: ${p => p.theme.gap[0]}px;
`;
