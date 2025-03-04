import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'screens/login/login';
import { ROUTES } from 'constants/routes';
import { Dimensions, Image, ScrollView, TouchableOpacity, Text, Platform, PermissionsAndroid, StyleSheet, TextInput, Keyboard, ImageBackground, View } from 'react-native';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <>
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'red'}}>
        <Text>asdsadasd</Text>
      </View> */}
      <AuthStack.Navigator
        initialRouteName={ROUTES.LOGIN}
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
      </AuthStack.Navigator>
    </>
  );
}