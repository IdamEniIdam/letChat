import React from 'react';  
import {StyleSheet, Text, View,Button, Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


class HomeScreen extends React.Component { 
    state = {
        image: null,
      };


  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  render() {  
    let { image } = this.state;
    return (  
        <View style={styles.container}>    
         <Text style={{textAlign: 'center'}}>Home Screen</Text>  
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Image Upload"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      <Button
                        buttonStyle={styles.button}
                        title="ChatRoom"
                        onPress={this.props.navigation.navigate("ShareMassage")}
                        // onPress={this.props.navigation.navigate("ChatRoom")}
                    />
              
        </View>  
    );  
  }  
}  


class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
       
        <Text style={{textAlign: 'center'}}>Profile Screen</Text>  
    
        </View>  
    );  
  }  
}  


class ImageScreen extends React.Component {  
    render() {  
        return (  
        <View style={styles.container}>  
        
                <Text style={{textAlign: 'center'}}>History Screen</Text>  
            </View>  
        );  
    }  
}  


class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}> 
  
                <Text style={{textAlign: 'center'}}>Cart Screen</Text>  
            </View>  
        );  
    }  
}  


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
     
    },  
});  


const DashBoard = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(DashBoard);