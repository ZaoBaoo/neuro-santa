export const BASE_URL = 'https://marketing.technodom.kz/api/v2/';

export const transitionState = {
  fadeDuration: 0,
  defaultFadeStyle: {
    transition: `opacity 1s ease`,
    opacity: 0,
  },
  transitionFadeStyles: {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  },
};
