//
import styled from 'styled-components';

export const TextSubtitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-right: ${p => p.theme.gap[0]}px;
  list-style-type: disc;
`;

export const Img = styled.img`
  width: 100%;
  display: flex;
  margin: 0 auto;
`;
