import { useEffect, useState } from 'react';

const events = ['mousedown', 'touchstart'];

export const useInteraction = function() {
  const [ready, setReady] = useState(false);

  const listener = () => {
    if (ready === false) {
      setReady(true);
    }
  };

  useEffect(() => {
    events.forEach((event) => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });
    };
  }, []);

  return ready;
}
