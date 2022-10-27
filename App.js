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
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'home-outline' : 'home-outline';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={'account-convert'}
                size={size}
                color={color}
              />
            );
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
          name="Settings"
          component={Index}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
