
import React from 'react'
import { StyleSheet, TextInput, SafeAreaView, Button, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebaseConfig';


export default function SignIn({ user, setUser }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pw)
    .then((userCredentials) => {
      navigation.navigate('프로필')
    })
    .catch(err => console.log(err))
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder={"email"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPw}
        value={pw}
        placeholder={"password"}
      />
      <Button
        title="로그인"
        onPress={handleSignIn}
        />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate("회원가입")}
      />
      <Text style={styles.text}>{ user !== null ? user.email + '\n회원가입이 완료되었습니다. ' : '' }</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '65%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center'
  }
});
