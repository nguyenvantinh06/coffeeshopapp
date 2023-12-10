// /**
//  * React Native App
//  * Everything starts from the Entry-point
//  */
// import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import RootScreens from 'src/screens';
// import './locales/IMLocalize';
// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
// import {UIManager, Platform} from 'react-native';

// if (
//   Platform.OS === 'android' &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const Setup = () => {
//   return React.useMemo(() => {
//     <RootScreens />;
//   }, []);
// };

// class EntryPoint extends React.Component {
//   constructor(props: any) {
//     super(props);
//   }

//   componentWillUnmount(): void {
//     // BackgroundService.onDestroy();
//   }

//   render() {
//     return (
//       <SafeAreaProvider>
//         {/* addition provider for the orientation feature*/}
//         <RootScreens />;{/* <Toast config={toastConfig} /> */}
//       </SafeAreaProvider>
//     );
//   }
// }

// export default gestureHandlerRootHOC(EntryPoint, {
//   flex: 1,
// });

import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootScreens from 'src/screens';
import './locales/IMLocalize';
import SplashScreen from 'react-native-splash-screen';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* content */}
      <SafeAreaProvider>
        <RootScreens />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
