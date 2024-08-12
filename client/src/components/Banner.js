import React, { useEffect, useState } from 'react';

const Banner = ({ description, timeLeft, link, isVisible }) => {
  const [currentTimer, setCurrentTimer] = useState(timeLeft);

  useEffect(() => {
    setCurrentTimer(timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    if (!isVisible || currentTimer <= 0) return;

    const timerId = setInterval(() => {
      setCurrentTimer((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentTimer, isVisible]);

  if (!isVisible || currentTimer <= 0) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      <p>{currentTimer} seconds left</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click here
      </a>
    </div>
  );
};

export default Banner;
