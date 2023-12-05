import { Transition } from 'react-transition-group';
import { transitionState } from '../utils/constants';
import { useEffect, useState } from 'react';

const withFade = (WrappedComponent) => {
  return (props) => {
    const [isShow, setIsShow] = useState(false);

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
      <Transition in={isShow} timeout={transitionState.fadeDuration}>
        {(state) => (
          <WrappedComponent
            {...props}
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
