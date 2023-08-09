import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>📝 메모장 앱 📝</Text>

      <Button 
        title="애플 로그인"
        accessibilityLabel="애플 로그인"
      />
      <Button 
        title="카카오 로그인"
        accessibilityLabel="카카오 로그인"
      />
    </View>
  );
}

// StatusBar가 꼭 필요한건지
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
