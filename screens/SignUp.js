import React from 'react'
import { getAuth } from 'firebase/auth';
import { StyleSheet, TextInput, SafeAreaView, Button, Text } from 'react-native';

export default function SignUp({ user }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [confimrPw, setConfirmPw] = React.useState('');

  const handleSignUp = () => {
    if (pw === confirmPw) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pw)
        .then((userCredentials) => {
          console.log(userCredentials.user.email + '회원가입이 완료되었습니다.');
        })
        .catch(err => console.log(err))
    }
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
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPw}
        value={confimrPw}
        placeholder={"confirm password"}
      />
      <Button
        title="회원가입"
        onPress={handleSignUp}
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
});
