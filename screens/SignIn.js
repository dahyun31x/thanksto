
import React from 'react'
import { StyleSheet, TextInput, View, Button, Alert, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'


export default function SignIn({ user, setUser }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredentials) => {
        console.log(userCredentials.user.email + '회원가입이 완료되었습니다.');
      })
      .catch(err => console.log(err))
  }
  

  return (
    <View style={styles.container}>
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
        onPress={() => Alert.alert('로그인 버튼이 클릭되었습니다.')}
        />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate("회원가입")}
      />
      <Text style={styles.text}>{ user !== null ? user.email + '\n회원가입이 완료되었습니다. ' : '' }</Text>
    </View>
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
