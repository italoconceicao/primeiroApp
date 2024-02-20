// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./src/screens/home"
import { Lists } from "./src/screens/Lists";
import Icons from './src/screens/Icons';
import Lottie from './src/screens/Lottie';
import Animations from './src/screens/Animations';
import Images from './src/screens/Images';
import LocalNotification from './src/screens/Notifications';
import * as Notifications from 'expo-notifications'

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,

  })
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: true, headerTitle: 'Seja bem-vindo' }} />
        <Stack.Screen name='Lists' component={Lists} />
        <Stack.Screen name='Icons' component={Icons} />
        <Stack.Screen name='Lottie' component={Lottie} />
        <Stack.Screen name='Animations' component={Animations} />
        <Stack.Screen name='Images' component={Images} />
        <Stack.Screen name='LocalNotification' component={LocalNotification} />

      </Stack.Navigator>
    </NavigationContainer >


    // <Home />
  )

}


// npx expo start
//eas build -p android --profile preview