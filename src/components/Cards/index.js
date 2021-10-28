import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonA } from '../ButtonElements';
import { TopLine } from '../Info/InfoElements';
import { CardContainer, CardWrapper } from './cardElements';
import { myapp } from '../../images';

const Cards = ({ id, title, cards }) => {
  return (
    <CardContainer id={id}>
      <TopLine>{title}</TopLine>
      <CardWrapper>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardMedia
              component='img'
              height='140'
              image={card.img ? card.img : myapp}
              alt={`image of ${card.title} project`}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {card.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {card.description}
              </Typography>
            </CardContent>
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
          </Card>
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
