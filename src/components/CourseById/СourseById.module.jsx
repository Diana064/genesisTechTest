import styled from 'styled-components';
import ReactPlayer from 'react-player';

import { FiArrowLeft } from 'react-icons/fi';
export const IconGoBack = styled(FiArrowLeft)`
  width: 25px;
  height: 25px;
`;
export const Button = styled.button`
  border: ${p => p.theme.borders.normal};
  border-radius: 10px;
  align-items: center;
  display: flex;
  width: 100px;
  height: 45px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
    border-color: ${p => p.theme.colors.border};
  }
  @media (max-width: 650px) {
    width: 90px;
    height: 30px;
    padding: 10px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
  margin: 0 0 50px;
  @media (max-width: 950px) {
    font-size: ${p => p.theme.fontSizes.l};
    margin: 10px 0 30px;
  }
`;
export const VideoWrapper = styled.div`
  margin: 0 auto;
  padding: ${p => p.theme.gap[4]}px;
  color: ${p => p.theme.colors.text};
  display: flex;
  min-width: 275px;
  flex-direction: column;
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
export const ContenxtWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  margin-bottom: ${p => p.theme.gap[5]}px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
export const TitleWrapper = styled.div``;
export const ContentWrapper = styled.div`
  padding: 30px;
  flex-wrap: wrap;
`;
export const VideoPlayer = styled(ReactPlayer)``;
