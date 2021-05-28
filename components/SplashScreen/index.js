import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

import Home from '../Home';

function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(async () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <AnimatedSplash
        isLoaded={isLoaded}
        logoImage={require('../../assets/logo.png')}
        backgroundColor={'#1B0536'}
        logoHeight={120}
        logoWidth={120}>
        <Home />
      </AnimatedSplash>
    </React.Fragment>
  );
}

export default SplashScreen;
