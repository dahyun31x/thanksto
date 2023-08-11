import { StyleSheet, View, Text, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>📝 메모장 앱 📝</Text>

      <Button 
        title="애플 로그인"
        accessibilityLabel="애플 로그인"
        onPress={() => console.log('click')}
        // onPress={() => navigation.navigate("Login")}
        />
      <Button 
        title="카카오 로그인"
        accessibilityLabel="카카오 로그인"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


