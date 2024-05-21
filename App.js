import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductListing from './screens/productListing';
import ProductDetails from './screens/productDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from './screens/favourites';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductContext from './context';


const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function BottomTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen options={{ title: 'Product List' }} name="productListing" component={ProductListing} />
      <Tabs.Screen options={{ title: 'Favourites' }} name="favourites" component={Favourites} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='bottomTabs' component={BottomTabs} />
            <Stack.Screen options={{ title: 'Product Details' }} name='productDetails' component={ProductDetails} />

          </Stack.Navigator>
        </NavigationContainer>
        {/* <ProductListing/>
      <Favourites/>
      <ProductDetails/> */}

      </View>

    </ProductContext>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
