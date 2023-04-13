
import React from 'react'
import { StyleSheet, SafeAreaView, Button, Alert, Text } from 'react-native';


export default function Profile({ user, setUser }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="로그아웃"
        onPress={() => Alert.alert('로그아웃 버튼이 클릭되었습니다.')}
        />
      <Text style={styles.text}>{user}</Text>
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
