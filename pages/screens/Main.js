import { StyleSheet, View, Text } from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>메인 화면</Text>
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
