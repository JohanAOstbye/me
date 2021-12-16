import { edu, jogging } from '../../images';

export const me = {
  id: 'me',
  darkTheme: true,
  topLine: 'My Interrests',
  heading: 'Friends, dancing and sports',
  paragraps: [
    [
      'I usuall spend my time hanging out with my friends, while watching movies or series',
    ],
    ['If im not with friends, then im either studying on working'],
  ],
  buttonlabels: [],
  imgStart: false,
  img: jogging,
  alt: 'education picture',
};

export const education = {
  id: 'education',
  darkTheme: false,
  topLine: 'Education',
  heading: 'My education at NTNU and Nesodden',
  paragraps: [
    ['Talent investment in classical ballet in junior high school'],
    ['Slottsfjellet VGS - General education (2016-2019)'],
    [
      'Norwegian University of Science and Technology:',
      '- Year study, art history (2020-2021)',
      '- Bachelor, Social and sports science (2021 - now)',
    ],
  ],
  buttonlabels: [
    {
      // eslint-disable-next-line quotes
      label: 'CV',
      link: './CV-2021-pdf',
      scroll: false,
      big: false,
      fontBig: false,
    },
    {
      // eslint-disable-next-line quotes
      label: 'More info',
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
