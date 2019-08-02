
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  static navigationOptions = ({ navigate, navigation }) => ({
    header: null
  })
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("ChatSetupSteps");
    }, 5000);
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, color: 'green', padding: 20}}>LetChat By IDLegend!</Text>
          <Animatable.View style={{ width: 300, height: 300, borderRadius: 50 }} animation="wobble" iterationCount={"infinite"} direction="alternate" delay={2000}>
          <Image style={{ width: 300, height: 300, resizeMode: "cover", borderRadius: 50 }} source={require("../assets/images/splashchat.jpg")} />
          </Animatable.View>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'red', padding: 20}}>Welcome to my world of words</Text>
          <Image style={{ width: 120, height: 120, resizeMode: "cover", borderRadius: 50, alignSelf: 'center' }} source={require("../assets/images/bb.png")} />

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});