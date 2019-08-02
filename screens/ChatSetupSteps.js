import { Image, View, BackHandler } from 'react-native';
import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';




const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => (
  <Button
    title={'Done'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
      marginRight: 10
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}   
  />
);


const Skip = ({ isLight, skipLabel, ...props }) => (
  <Button
    title={'Skip'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
      marginLeft: 10
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  >
    {skipLabel}
  </Button>
);

const Next = ({ isLight, ...props }) => (
  <Button
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
      marginRight: 10
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
);


  export default class ChatSetupSteps extends React.Component {
    constructor(props) {
      super(props);
    }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
  }

    render(){
      return(
        <Onboarding
        skipToPage={2}
        onDone={() => this.props.navigation.navigate('GetUserName')}
        // onDone={() => this.props.navigation.navigate('DashBoard')}
        // onDone={() => this.props.navigation.navigate('Drawer')}
        DotComponent={Square}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        titleStyles={{ color: 'blue' }} // set default color for the title
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image style={{borderRadius: 50}} source={require("../assets/images/one.jpeg")} />,
            title: 'Your Chats is unique and special.',
            subtitle: 'Use this app to set up your chating potentials',
            titleStyles: { color: 'green' }, // overwrite default color
          },
          {
            backgroundColor: '#fe6e58',
            image: <Image style={{borderRadius: 50}}  source={require("../assets/images/two.png")} />,
            title: 'Authentication of chats very powerfull',
            subtitle: 'With just your user name $ mobile number',
          },
          {
            backgroundColor: '#999',
            image: <Image style={{ borderRadius: 50 }}  source={require("../assets/images/three.png")} />,
            title: 'Click on Done Below',
            subtitle: "To start your setUp!",
          },
        ]}
      /> 
           )
  }

}

