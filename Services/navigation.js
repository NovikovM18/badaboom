import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Calendar from '../Screens/Calendar';

const Stack = createStackNavigator();
let user = {};

function LoginStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Home' component={Home} /> */}
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Calendar' component={Calendar} />
    </Stack.Navigator>
  );
}

export default function MyStack() {
  return (user ? UserStack() : LoginStack());
}
