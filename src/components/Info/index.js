import React from 'react';
import PropTypes from 'prop-types';
import { ButtonS, ButtonA } from '../ButtonElements';
import {
  AContainer,
  AWrapper,
  ARow,
  ColumnTop,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ColumnImg,
  ImgWrapper,
  Img,
} from './InfoElements';

const Article = ({
  id,
  darkTheme,
  topLine,
  heading,
  paragraps,
  buttonlabels,
  imgStart,
  img,
  alt,
}) => {
  return (
    <AContainer id={id} darkTheme={darkTheme}>
      <AWrapper>
        <ARow imgStart={imgStart}>
          <ColumnTop>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading darkTheme={darkTheme}>{heading}</Heading>
              {paragraps.map((paragrap, index) => (
                <Subtitle key={index} darkTheme={darkTheme}>
                  {paragrap.map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
                </Subtitle>
              ))}
            </TextWrapper>

            <BtnWrapper>
              {buttonlabels.map((button, index) =>
                button.scroll ? (
                  <ButtonS
                    key={index}
                    to={button.link}
                    darkTheme={darkTheme}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    big={button.big}
                    fontBig={button.fontBig}
                  >
                    {button.label}
                  </ButtonS>
                ) : (
                  <ButtonA
                    key={index}
                    href={button.link}
                    darkTheme={darkTheme}
                    big={button.big}
                    fontBig={button.fontBig}
                  >
                    {button.label}
                  </ButtonA>
                )
              )}
            </BtnWrapper>
          </ColumnTop>
          <ColumnImg>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ColumnImg>
        </ARow>
      </AWrapper>
    </AContainer>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  darkTheme: PropTypes.bool,
  topLine: PropTypes.string,
  heading: PropTypes.string,
  paragraps: PropTypes.array,
  buttonlabels: PropTypes.array,
  imgStart: PropTypes.string,
  img: PropTypes.any,
  alt: PropTypes.string,
};

export default Article;
