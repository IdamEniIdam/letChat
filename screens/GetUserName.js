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
            userName: ''
        };
    }

    handleChangeInput = (text) => {
        this.setState({ userName: text })
      }

    saveValueFunction = () => {
        if (this.state.userName) {
            AsyncStorage.setItem('UserName', this.state.userName);
            this.props.navigation.navigate("GetUserMobile");
            // this.setState({ userName: '' })
        } else {
            this.dropdown.alertWithType(
                'error',
                'UserID empty!',
                'Please fill in UserName.'
            );
        }

    };



    async componentDidMount() {
        await Font.loadAsync({
            "lato-m": require("../assets/fonts/Lato-Medium.ttf")
        });
        this.setState({ fontLoaded: true });
    }


    render() {
        const { userName } = this.state
        return (
            <View style={styles.container}>

<Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                <View style={{alignItems: 'center', textAlign: 'center', marginTop: 30}}>
                <Animatable.Text style={{textAlign: 'center'}} animation="bounceIn" iterationCount={"infinite"} direction="alternate" delay={2000}>
                    <Text style={{fontSize: 20, color: 'green', textAlign: 'center'}}>Please enter a <Text style={{color: 'black'}}>UserName</Text> name you wish to use</Text>
                </Animatable.Text>
                </View>
           
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                <View style={{ alignSelf: 'center' }}>
                    <View style={[styles.card2, { backgroundColor: '#d0efe0' }]}>
                        <Text style={styles.title}>User-ID</Text>
                        <Makiko
                            label={'Enter USER Name'}
                            iconClass={FontAwesomeIcon}
                            iconName={'heart'}
                            iconColor={'white'}
                            iconSize={35}
                            inputStyle={{ color: '#db786d' }}
                            // value={this.state.userId}
                            autoCapitalize="characters"
                            onChangeText={this.handleChangeInput}
                            value={userName}
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