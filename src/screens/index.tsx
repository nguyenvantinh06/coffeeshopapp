import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  PaperThemeDark,
  PaperThemeDefault,
} from 'src/config/theme-config';
import RootStack from 'src/navigation';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

const Screens: React.FC = () => {
  return React.useMemo(() => {
    const paperTheme = PaperThemeDefault;

    return (
      <PaperProvider theme={paperTheme}>
        <RootStack theme={paperTheme} />
        {/* {isLoading && <AppLoading />} */}
      </PaperProvider>
    );
  }, []);
};

export default Screens;
