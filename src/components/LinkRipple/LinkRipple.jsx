import './LinkRipple.scss';

const isMobile = window.innerWidth < 700;

const LinkRipple = ({ to, text, className }) => {
  const handleHover = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const span = e.target.querySelector('span');

    if (span?.style && span?.style) {
      span.style.left = `${offsetX}px`;
      span.style.top = `${offsetY}px`;
    }
  };

  const handleMouseOut = (e) => {
    const span = e.target.querySelector('span');
    const { offsetX, offsetY } = e.nativeEvent;
    if (span?.style && span?.style) {
      span.style.left = `${offsetX}px`;
      span.style.top = `${offsetY}px`;
    }
  };
  return (
    <a
      className={`linkRipple ${className}`}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      href={to}
    >
      <span></span>
      <div className="linkRipple__text">{text}</div>
    </a>
  );
};

export { LinkRipple };
