
import React from 'react'
import { StyleSheet } from 'react-native';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="로그인" component={LogIn}/>
        <Stack.Screen name="회원가입" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  }
});
