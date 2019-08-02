import React from 'react';
import { StyleSheet, Text, AsyncStorage, View, Button } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { Makiko } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import Footer from "../components/footer";
import * as Animatable from 'react-native-animatable';


export default class GetUserName extends React.Component {
    static navigationOptions = ({ navigate, navigation }) => ({
        header: null
    })
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            GetUserName: ''
        };
    }

    handleChangeInput = (text) => {
        this.setState({ mobile: text })
      }

    saveValueFunction = () => {
        if (this.state.mobile) {
            AsyncStorage.setItem('mobile', this.state.mobile);
            this.props.navigation.navigate("");
            // this.setState({ userName: '' })
        } else {
            this.dropdown.alertWithType(
                'error',
                'Phone number empty!',
                'Please fill in your mobile number.'
            );
        }

    };

    getValueFunction = () => {
        //function to get the value from AsyncStorage
        AsyncStorage.getItem('UserName').then(value =>
          //AsyncStorage returns a promise so adding a callback to get the value
          this.setState({ GetUserName: value })
          //Setting the value in Text 
        );
      };



    async componentDidMount() {
        await Font.loadAsync({
            "lato-m": require("../assets/fonts/Lato-Medium.ttf")
        });
        this.setState({ fontLoaded: true });
        this.getValueFunction() 
    }


    render() {
        const { mobile } = this.state
        return (
            <View style={styles.container}>

<Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                <View style={{alignItems: 'center', textAlign: 'center', marginTop: 30}}>
                <Animatable.Text style={{textAlign: 'center'}} animation="flash" iterationCount={"infinite"} direction="alternate" delay={2000}>
                    <Text style={{fontSize: 20, color: 'green', textAlign: 'center'}}>Your user name is: <Text style={{color: 'black'}}>{this.state.GetUserName}</Text> </Text>
                </Animatable.Text>
                </View>
           
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                <View style={{ alignSelf: 'center' }}>
                    <View style={[styles.card2, { backgroundColor: '#d0efe0' }]}>
                        <Text style={styles.title}>User-ID</Text>
                        <Makiko
                            label={'Enter mobile number'}
                            iconClass={FontAwesomeIcon}
                            iconName={'phone'}
                            iconColor={'white'}
                            iconSize={35}
                            inputStyle={{ color: '#db786d' }}
                            maxLength={11}
                            keyboardType={'numeric'}
                            autoCapitalize="characters"
                            onChangeText={this.handleChangeInput}
                            value={mobile}
                        />
                    </View>

                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Button
                        buttonStyle={styles.button}
                        title="Continue"
                        onPress={this.saveValueFunction}
                    />
                    <Text>{"\n"}</Text>

                    <Text style={{ textAlign: 'center' }}>
                        Click on Continue above to proceed.
</Text>
                </View>



                <DropdownAlert
                    ref={ref => (this.dropdown = ref)}
                    closeInterval={5000}
                />

                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    userID: {
        // flex: 1,
        alignItems: 'center',

    },
    card2: {
        padding: 16,
        width: 300,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    }
});