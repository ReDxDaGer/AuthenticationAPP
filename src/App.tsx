import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DefaultTheme,NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import Login from './screens/login';
import home from './screens/home';
import Signup from './screens/signup';

const stack = createNativeStackNavigator();

let theme = {
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    background:'#fff'
  }
}

const App = () => {
  return (
    <>
    <NavigationContainer theme={theme}>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='SignUp' component={Signup}/>
        <stack.Screen name='Home' component={home}/>
      </stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{},
  
})