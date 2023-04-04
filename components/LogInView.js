
import React from 'react'
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default function LogInView({ setView }) {
  const [email, onChangeEmail] = React.useState('');
  const [pw, onChangePw] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={"email"}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePw}
        value={pw}
        placeholder={"password"}
      />
      <Button
        title="로그인"
        onPress={() => Alert.alert('로그인 버튼이 클릭되었습니다.')}
      />
      <Button
        title="회원가입"
        onPress={() => setView('회원가입')}
      />
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
});
