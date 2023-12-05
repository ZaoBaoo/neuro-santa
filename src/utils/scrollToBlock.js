const scrollToBlock = (selector) => {
  setTimeout(() => {
    const element = document.querySelector(selector);
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
  }, 0);
};

export { scrollToBlock };
