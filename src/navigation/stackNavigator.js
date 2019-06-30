import React,{Component} from 'react';
import { View, Text,TouchableOpacity,Image } from "react-native";
import { 
  createStackNavigator, 
  createAppContainer,
  createDrawerNavigator
 } from "react-navigation";
 import Home from '../Screens/home';
 import Note from '../Screens/Note';
 import MenuDrawer from '../Components/MenuDrawer';

 


 const RootStack = createStackNavigator(
    {
      Home: {
        screen: Home,
       
        
      },
        Note: {
          screen: Note,
        }
       
      }
      ,{
        mode: 'modal',
        
        
      } 
  )

 const MainDrawer = createDrawerNavigator(
    {
      Home: {
        screen: RootStack,
      },
      Note: {
        screen: Note,
      },
    },
    {
      initialRouteName: 'Home',
      mode: 'card',
      drawerWidth:235,
      contentComponent:({ navigation}) =>{
        return(<MenuDrawer/>)
      }
      
    }
  )
  
  
  
  const appContainer = createAppContainer(MainDrawer);
  
  export default appContainer;