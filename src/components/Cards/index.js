import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonA } from '../ButtonElements';
import { TopLine } from '../Info/InfoElements';
import { CardContainer, CardWrapper } from './cardElements';
import { myapp } from '../../images';

const CustomCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CustomCardContent = styled(CardContent)`
  height: max-content;
  flex-grow: 2;
`;

const Cards = ({ id, title, cards }) => {
  return (
    <CardContainer id={id}>
      <TopLine>{title}</TopLine>
      <CardWrapper>
        {cards.map((card, index) => (
          <CustomCard key={index}>
            <CardMedia
              component='img'
              height='140'
              image={card.img ? card.img : myapp}
              alt={`image of ${card.title} project`}
            />
            <CustomCardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {card.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {card.description}
              </Typography>
            </CustomCardContent>
            <CardActions>
              <ButtonA
                href={card.link}
                darkTheme={false}
                big={false}
                bigFont={false}
              >
                {card.linkLabel}
              </ButtonA>
            </CardActions>
          </CustomCard>
        ))}
      </CardWrapper>
    </CardContainer>
  );
};

Cards.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default Cards;
