import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { env } from 'process';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';
import { contact } from '../../images';
import { Button } from '../ButtonElements';
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
} from '../Info/InfoElements';
import {
  TalkLinks,
  TalkForm,
  TalkInput,
  TalkArea,
  TalkSpan,
} from './talkElements';

const Talk = ({ id, darkTheme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    let feedback = document.querySelector('#feedback');
    if (!email || !isValidEmail(email)) {
      feedback.innerHTML = 'please enter i valid email';
    } else {
      if (name && message) {
        const serviceId = env.SERVICE_ID;
        const templateId = env.TEMPLATE_ID;
        const userId = env.USER_ID;
        const templateParams = {
          name,
          email,
          message,
        };

        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then((response) => console.log(response))
          .then((error) => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
        feedback.innerHTML =
          'Thanks for contacting me! I&apos;ll come back to you as soon as i can!:)';
      } else {
        feedback.innerHTML = 'Please fill in every field';
      }
    }
  };

  return (
    <AContainer id={id} darkTheme={darkTheme}>
      <AWrapper>
        <ARow>
          <ColumnTop>
            <TextWrapper>
              <TopLine>my info</TopLine>
              <Heading darkTheme={darkTheme}>Lets Talk</Heading>
              <Subtitle darkTheme={darkTheme}>
                If you want to get in touch with me, feel free to contact me
                wherever you prefer:)
              </Subtitle>
              <TalkLinks>
                <a href='https://johanaostbye.github.io/cv'>
                  <PublicIcon sx={{ color: 'black' }} fontSize='large' />
                </a>
                &#183;
                <a href='https://www.linkedin.com/in/johanaugust%C3%B8stbye/'>
                  <LinkedInIcon sx={{ color: 'black' }} fontSize='large' />
                </a>
                &#183;
                <a href='https://www.instagram.com/johan_august98'>
                  <InstagramIcon sx={{ color: 'black' }} fontSize='large' />
                </a>
                &#183;
                <a href='mailto:Johan.August@outlook.com'>
                  <EmailIcon sx={{ color: 'black' }} fontSize='large' />
                </a>
              </TalkLinks>
              <Subtitle darkTheme={darkTheme}>
                Or use this form to send me an email:)
              </Subtitle>
              <TalkForm id='contectform'>
                <TalkInput
                  type='text'
                  placeholder='Your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TalkInput
                  type='text'
                  placeholder='Your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TalkArea
                  placeholder='Your message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div>
                  <TalkSpan
                    id='feedback'
                    darkTheme={darkTheme}
                    className={emailSent ? 'visible' : null}
                  ></TalkSpan>
                </div>
              </TalkForm>
            </TextWrapper>

            <BtnWrapper>
              <Button onClick={submit}>send mail and connect!</Button>
            </BtnWrapper>
          </ColumnTop>
          <ColumnImg>
            <ImgWrapper>
              <Img src={contact} alt='connect with me illustration' />
            </ImgWrapper>
          </ColumnImg>
        </ARow>
      </AWrapper>
    </AContainer>
  );
};

Talk.propTypes = {
  id: PropTypes.string,
  darkTheme: PropTypes.bool,
};

export default Talk;
