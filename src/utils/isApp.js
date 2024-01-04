export const isApp = () => {
  const queryParams = new URLSearchParams(document.location.search);
  const isMobileApp = queryParams.get('source');

  if (isMobileApp === 'mobile-app') {
    return true;
  } else {
    return false;
  }
};
