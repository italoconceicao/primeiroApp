// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./src/screens/home"
import { Lists } from "./src/screens/Lists";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: true, headerTitle: 'Seja bem-vindo' }} />
        <Stack.Screen name='Lists' component={Lists} />
        {/* <Stack.Screen name='Icons' component={Icons} /> */}

      </Stack.Navigator>
    </NavigationContainer >



    // <Home />
  )

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// npx expo start
//eas build -p android --profile preview