import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{animation: 'slide_from_right'}}/>
            <Stack.Screen name="Basket" component={BasketScreen} options={{animation: 'slide_from_bottom', animationDuration: 50}}/>
            <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{animation: 'flip', animationDuration: 50, headerShown: false, presentation: 'fullScreenModal'}}/>
            <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{animation: 'slide_from_bottom', animationDuration: 50, headerShown: false}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}




