import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from './screens/SplashScreen';
import ChatSetupSteps from './screens/ChatSetupSteps';
import GetUserName from './screens/GetUserName';
import GetUserMobile from './screens/GetUserMobile';
import DashBoard from './screens/DashBoard';
import ChatRoom from './screens/ChatRoom';
import ShareMessage from './screens/ShareMessage';

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    ChatSetupSteps: {
      screen: ChatSetupSteps,
      navigationOptions: {
        header: null
      }
    },
    GetUserName: {
      screen: GetUserName,
      navigationOptions: {
        header: null
      }
    },
    GetUserMobile: {
      screen: GetUserMobile,
      navigationOptions: {
        header: null
      }
    }, DashBoard: {
      screen: DashBoard,
      navigationOptions: {
        header: null
      }
    },
    ChatRoom: {
      screen: ChatRoom,
      navigationOptions: {
        header: null
      }
    },
    ShareMessage: {
      screen: ShareMessage,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "SplashScreen"
  }
);



let AppContainer = createAppContainer(AppNavigator);

  export default class App extends React.Component {
  render(){
    return  <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
