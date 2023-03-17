import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid;
  background: white;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.text};
  &:hover {
    transform: scale(1.05);
    border-color: ${p => p.theme.colors.border};
    color: ${p => p.theme.colors.border};
  }
`;
export const PaginationWrapper = styled.div`
  gap: 20px;
  align-items: center;
  margin: 30px auto;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const PrevPage = styled(FiArrowLeft)`
  width: 25px;
  height: 25px;
`;
export const NextPage = styled(FiArrowRight)`
  width: 25px;
  height: 25px;
`;
