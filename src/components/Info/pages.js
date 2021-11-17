import { edu, couch } from '../../images';

export const me = {
  id: 'me',
  darkTheme: true,
  topLine: 'My Interrests',
  heading: 'Friends, coding and sports',
  paragraps: [
    [
      'I usuall spend my time hanging out with my friends, while watching movies or series',
    ],
    ['If im not with friends, then im either studying on working'],
  ],
  buttonlabels: [],
  imgStart: false,
  img: couch,
  alt: 'education picture',
};

export const education = {
  id: 'education',
  darkTheme: false,
  topLine: 'Education',
  heading: 'My education at NTNU and Nesodden',
  paragraps: [
    ['Nesodden VGS - general education (2014-2017)'],
    [
      'Norwegian University of Science and Technology:',
      '- Bachelor in Informatics (2017-2021)',
      '- Master in Informatics, databases and scearch (2021 - now)',
    ],
  ],
  buttonlabels: [
    {
      // eslint-disable-next-line quotes
      label: 'CV',
      link: 'https://johanAostbye.github.io/cv',
      scroll: false,
      big: false,
      fontBig: false,
    },
    {
      // eslint-disable-next-line quotes
      label: 'My projects',
      link: 'projects',
      scroll: true,
      big: false,
      fontBig: false,
    },
  ],
  imgStart: true,
  img: edu,
  alt: 'education picture',
};
