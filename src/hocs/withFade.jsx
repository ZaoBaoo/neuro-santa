import { Transition } from 'react-transition-group';
import { transitionState } from '../utils/constants';
import { useEffect, useState, useRef } from 'react';

const withFade = (WrappedComponent) => {
  return (props) => {
    const [isShow, setIsShow] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        setIsShow(true);
      }, 0);

      return () => {
        setTimeout(() => {
          setIsShow(false);
        }, 0);
      };
    }, []);

    return (
      <Transition in={isShow} timeout={transitionState.fadeDuration} nodeRef={nodeRef}>
        {(state) => (
          <WrappedComponent
            {...props}
            ref={nodeRef}
            style={{
              ...transitionState.defaultFadeStyle,
              ...transitionState.transitionFadeStyles[state],
            }}
          />
        )}
      </Transition>
    );
  };
};

export { withFade };
