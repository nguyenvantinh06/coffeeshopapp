import React from 'react';
import AppText from 'src/components/app-text';
import AppView from 'src/components/app-view';

const HomeScreen = () => {
  return (
    <AppView>
      <AppText>123</AppText>
    </AppView>
  );
};

export default React.memo(HomeScreen);
