import React, { useEffect, useState } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import colors from '../static/theme/Colors';

const CustomSwitch = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
  }, [location]);

  useEffect(() => {
    setProgress(false)
  }, [prevLoc]);

  TopBarProgress.config({
    barColors: {
      '0': colors[0],
      '0.25': colors[1],
      '0.5': colors[2],
      '0.75': colors[3],
      '1.0': colors[4],
    },
    shadowBlur: 5
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <Switch>{children}</Switch>
    </>
  );
}

export default CustomSwitch;