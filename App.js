
import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import LogInView from './components/LogInView';
import SignUpView from './components/SignUpView';

export default function App() {
  const [view, setView] = React.useState('로그인');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Thanks to</Text>
      { view === '로그인' && <LogInView setView={setView} /> }
      { view === '회원가입' && <SignUpView setView={setView} /> }
    </SafeAreaView>
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
