import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Index from './Component/Index';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const HomeStack = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Favourite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <HomeStack.Screen
          name="Home"
          component={Index}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Chat"
          component={Index}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Favourite"
          component={Index}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Account"
          component={Index}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
