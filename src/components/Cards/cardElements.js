import styled from 'styled-components';
import { darkbg } from '../cssConstants';

export const CardContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${darkbg};
  padding: 2rem 0;
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
