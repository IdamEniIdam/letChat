import React, { Component } from 'react';

import { Platform, View, Text, StyleSheet, Share, TextInput, Button, Alert } from 'react-native';

export default class ShareMessage extends Component
{
    constructor()
    {
        super();

        this.state = 
          { 

            TextInputValueHolder: ''

          }
    }

    ShareMessage=()=>
    {
            Share.share(
            {
                
              message: this.state.TextInputValueHolder.toString()
            
            }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
    }

    render()
    {
        return(

          <View style = { styles.MainContainer }>

              <TextInput 
                underlineColorAndroid = "transparent" 
                placeholder="Enter Text Here To Share"
                style = { styles.TextInputStyle } 
                onChangeText = { ( TextInputText ) => { this.setState({ TextInputValueHolder: TextInputText })} } 
              />

              <Button title="Click Here To Share TextInput Inside Typed Text as Message" onPress={ this.ShareMessage } />
              

          </View>
        
      );
    }
}

const styles = StyleSheet.create(
{  
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        margin:10
    },

    TextInputStyle:
    {
        borderWidth: 1,
        borderColor: '#009688',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});