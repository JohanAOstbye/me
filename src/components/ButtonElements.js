import styled from 'styled-components';
import { Link } from 'react-scroll';
import { darkbg, primary, white } from './cssConstants';

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? primary : darkbg)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkTheme }) => (darkTheme ? darkbg : white)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ darkTheme }) => (darkTheme ? white : primary)};
  }
`;

export const ButtonS = styled(Link)`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? primary : darkbg)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkTheme }) => (darkTheme ? darkbg : white)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ darkTheme }) => (darkTheme ? white : primary)};
  }
`;

export const ButtonA = styled.a`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? primary : darkbg)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkTheme }) => (darkTheme ? darkbg : white)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ darkTheme }) => (darkTheme ? white : primary)};
  }
`;
