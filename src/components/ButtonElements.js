/* eslint-disable indent */
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { darkbg, lightText, btn_primary, white } from './cssConstants';

export const Button = styled.button`
  border-radius: 50px;
  background-image: ${({ darkTheme }) => (darkTheme ? btn_primary : 'none')};
  background-color: ${({ darkTheme }) => (darkTheme ? 'transparent' : darkbg)};
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
  -webkit-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -moz-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -o-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;

  &:hover {
    background-color: ${({ darkTheme }) =>
      darkTheme ? darkbg : 'transparent'};
    background-image: ${({ darkTheme }) => (darkTheme ? 'none' : btn_primary)};
  }
`;

export const ButtonS = styled(Link)`
  border-radius: 50px;
  background-image: ${({ darkTheme }) => (darkTheme ? btn_primary : 'none')};
  background-color: ${({ darkTheme }) => (darkTheme ? 'transparent' : darkbg)};
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
  -webkit-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -moz-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -o-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;

  &:hover {
    background-color: ${({ darkTheme }) =>
      darkTheme ? darkbg : 'transparent'};
    background-image: ${({ darkTheme }) => (darkTheme ? 'none' : btn_primary)};
  }
`;

export const ButtonA = styled.a`
  border-radius: 50px;
  background-image: ${({ darkTheme }) => (darkTheme ? btn_primary : 'none')};
  background-color: ${({ darkTheme }) => (darkTheme ? 'transparent' : darkbg)};
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
  -webkit-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -moz-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  -o-transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  transition: background-color 0.5s, ease-in-out,
    background-image 0.5s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ darkTheme }) =>
      darkTheme ? darkbg : 'transparent'};
    background-image: ${({ darkTheme }) => (darkTheme ? 'none' : btn_primary)};
  }
`;
