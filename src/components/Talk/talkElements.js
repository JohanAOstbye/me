import styled from 'styled-components';
import { white, darkbg, primary } from '../cssConstants';

export const TalkForm = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkTheme }) => (darkTheme ? white : darkbg)};
`;

export const TalkLinks = styled.div`
  display: flex;
  justify-content: center;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 32px;
  line-height: 24px;
  color: ${({ darkTheme }) => (darkTheme ? white : darkbg)};
`;

export const TalkInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${primary};
`;

export const TalkArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${primary};
`;

export const TalkSpan = styled.span`
  color: ${({ darkTheme }) => (darkTheme ? white : darkbg)};
`;
