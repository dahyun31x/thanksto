
import React from 'react'
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
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
        title="Login"
        onPress={() => Alert.alert('Login Button is pressed.')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
