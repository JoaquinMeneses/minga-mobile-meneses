import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { API } from 'react-native-dotenv';

export default function App() {
  console.log(API);
  return (
    <View className="h-screen flex items-center justify-center">
      <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
