import {
	StyleSheet, Text, View,
	Button,
	Dimensions,
	useWindowDimensions,
	PermissionsAndroid,
	Platform,
	ToastAndroid
} from 'react-native';
import {useState, createContext} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TaskListScreen from './screens/TaskListScreen';

const Stack = createStackNavigator()
export const AuthContext = createContext()

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator initialRouterName = 'Login'>
          {
            !user ? (
              <>
                <Stack.Screen name={'Login'} component={LoginScreen} options={{title:''}}/>
                <Stack.Screen name={'Signup'} component={SignupScreen} options={{title:''}}/>
              </>
            ) : (
              <Stack.Screen name={'TaskList'} component={TaskListScreen}/>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
