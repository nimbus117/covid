import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ text = 'Loading', speed = 300 }): JSX.Element => {
  const [shownText, setShownText] = useState(text);

  useEffect(() => {
    const timer = setInterval(
      () => setShownText((t) => (t === text + '...' ? text : t + '.')),
      speed,
    );
    return (): void => clearInterval(timer);
  });

  return <div id="loading">{shownText}</div>;
};

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.object,
};

export default Loading;
