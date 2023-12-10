import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import AppText from 'src/components/app-text';
import AppImage from 'src/components/app-image';
import {SCENE_NAME} from 'src/utils/app-const';

export default function LoginScreen() {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate(SCENE_NAME.HOME_TAB);
  };
  return (
    <View className="bg-white h-full w-full">
      <AppImage
        className="h-full w-full absolute"
        source={require('src/assets/images/background.png')}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require('src/assets/images/light.png')}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require('src/assets/images/light.png')}
          className="h-[160] w-[65] opacity-75"
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-36 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
            <TouchableOpacity className="flex items-end">
              <AppText className="text-gray-700 mb-5">Forgot Password?</AppText>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            className="w-full"
            entering={FadeInDown.delay(400).duration(1000).springify()}>
            <TouchableOpacity
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
              onPress={onPressLogin}>
              <AppText className="text-xl font-bold text-white text-center">
                Login
              </AppText>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
            <AppText>Don't have an account? </AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCENE_NAME.SIGN_UP)}>
              <AppText className="text-sky-600">SignUp</AppText>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
