
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import SignUp from './screens/SignUp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator(); 

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="로그인">
          {(_) => <SignIn user={user} />}
        </Stack.Screen>
        <Stack.Screen name="회원가입">
          {(_) => <SignUp user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="프로필" options={{ title: "Thanks to", headerBackVisible: false }}>
          {(_) => <Profile user={user} setUser={setUser}/>}
        </Stack.Screen>
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
