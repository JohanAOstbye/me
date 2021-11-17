/* eslint-disable indent */
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { darkbg, lightText, btn_primary, white } from './cssConstants';

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? btn_primary : darkbg)};
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
  -webkit-transition: background-color 0.2s linear;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;

  &:hover {
    background: ${({ darkTheme }) => (darkTheme ? white : btn_primary)};
  }
`;

export const ButtonS = styled(Link)`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? btn_primary : darkbg)};
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
  -webkit-transition: background-color 0.2s linear;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;

  &:hover {
    background: ${({ darkTheme }) => (darkTheme ? white : btn_primary)};
  }
`;

export const ButtonA = styled.a`
  border-radius: 50px;
  background: ${({ darkTheme }) => (darkTheme ? btn_primary : darkbg)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkTheme }) => (darkTheme ? lightText : white)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: background-color 0.2s linear;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  text-decoration: none;

  &:hover {
    background: ${({ darkTheme }) => (darkTheme ? darkbg : btn_primary)};
  }
`;
