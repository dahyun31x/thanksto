
import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import LogInView from './components/LogInView';
import SignUpView from './components/SignUpView';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="로그인" component={LogInView}/>
        <Stack.Screen name="회원가입" component={SignUpView}/>
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
