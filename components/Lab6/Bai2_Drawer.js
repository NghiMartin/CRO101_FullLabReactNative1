import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Ionicons  from '@expo/vector-icons/Ionicons';

function Bai2_Drawer() {
const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
    screenOptions={{
        headerStyle: {backgroundColor: '#FF9228'},
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#FFD1A7',
        drawerActiveTintColor: '#FF9228',
    }}>
      <Drawer.Screen 
      name="Home" 
      component={HomeScreen}
       options={{
        drawerLabel: 'Welcome Home',
        drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
      }}/>
        <Drawer.Screen name="Account" component={HomeScreen}
        options={{
            drawerLabel: 'Welcome Account',
            drawerIcon: ({color, size}) => <Ionicons name='person-circle-outline' color={color} size={size} />
          }} />
      <Drawer.Screen name="Product" component={HomeScreen}
        options={{
            drawerLabel: 'Welcome Setting',
            drawerIcon: ({color, size}) => <Ionicons name='settings-outline' color={color} size={size} />
          }} />
    </Drawer.Navigator>
  );
}
export default Bai2_Drawer;