// AppNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

import Home from './screens/Home';
import Notification from './screens/Notification';
import Scan from './screens/Scan';
import History from './screens/History';
import Cart from './screens/Cart';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#BBBBBB',
          inactiveTintColor: '#BBBBBB',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./path/to/home.svg')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./path/to/bell.svg')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./path/to/scanning.svg')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./path/to/history.svg')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./path/to/cart.svg')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
