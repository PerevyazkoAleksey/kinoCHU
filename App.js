import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import { LogBox } from 'react-native';

//Screens
import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen';
import ListScreen from './screens/ListScreen';
import FriendsScreen from './screens/FriendsScreen';
import HomeNav from './screens/HomeNav';
import AuthForm from './screens/AuthForm';
import OnBoarding from './screens/OnBoarding';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: '#272727',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function HomeTabs() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Friends') {
            iconName = focused ? 'people' : 'people-outline';
          }
          else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }
          else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF862D',
        tabBarInactiveTintColor: '#FEFEFE',
      })}>
        <Tab.Screen name="Home" component={HomeNav} options={{ headerShown: false }} />
        <Tab.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}

export default function App() {

  return (
    <Provider store={store}>  
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthForm} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


