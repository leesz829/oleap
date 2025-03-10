import 'react-native-gesture-handler'; // 최상단에 필수로 추가
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STACK } from 'constants/routes';
import { useIsLogedin } from 'hooks/useIsLogin';
import { useUserInfo } from 'hooks/useUserInfo';
import AuthNavigation from 'navigation/AuthNavigation';
import CommonNavigation from 'navigation/CommonNavigation';
import React from 'react';
import BottomNavigation from '../TabNavigation';
import SplashScreen from 'react-native-splash-screen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  const isLogin = useIsLogedin();

  React.useEffect(() => {
    if(isLogin) {
      //SplashScreen.hide();
    }
  }, [isLogin]);

  return (
    <MainStack.Navigator
      // initialRouteName={isLogin ? STACK.TAB : STACK.AUTH}
      initialRouteName={STACK.AUTH}
      screenOptions={{ headerShown: false }}
    >
      {isLogin ? (
        <>
          <MainStack.Screen name={STACK.TAB} component={BottomNavigation} />
          <MainStack.Screen name={STACK.COMMON} component={CommonNavigation} />
        </>
      ) : (
        <MainStack.Screen name={STACK.AUTH} component={AuthNavigation} />
      )}

      {/* <Stack.Screen name={STACK.AUTH} component={AuthNavigation} /> */}

      {/* <MainStack.Screen name={STACK.AUTH} component={AuthNavigation} />
      <MainStack.Screen name={STACK.TAB} component={BottomNavigation} /> */}
    </MainStack.Navigator>
  );
};




export default MainStackNavigation;
export type MainStackParamList = {
  COMMON: undefined;
  AUTH: undefined;
  TAB: undefined;
};