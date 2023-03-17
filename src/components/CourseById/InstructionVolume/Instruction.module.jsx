import styled from 'styled-components';
export const CourseTitle = styled.h2`
  margin: ${p => p.theme.gap[5]}px auto;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: ${p => p.theme.colors.title};
`;
export const Button = styled.button`
  border: ${p => p.theme.borders.normal};
  border-radius: 10px;
  width: 300px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
    border-color: ${p => p.theme.colors.border};
  }
`;
export const IntructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
