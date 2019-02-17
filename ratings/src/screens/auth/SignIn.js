import React from 'react';

import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';

import { ContainerView, StyledInput } from './styled';
import { goToHome } from '../home';
import { USER_KEY } from '../config';

export default class SignIn extends React.Component {
    state = {
        username: '', password: ''
    }
    onChangeText = (key, value) => {
        this.setState({[key]: value});
    }

    signIn = async() => {
        const { username, password } = this.state;
        try {
            const user = await AsyncStorage.setItem(USER_KEY, username);
            console.log( 'user successfully signed in!', username);
            goToHome();
        } catch(err) {
            console.log('error: ', err);
        }
    }

    render() {
        return ( 
            <ContainerView>
                <StyledInput
                    placeholder='Username'
                    autoCapitalize='none'
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <StyledInput
                    placeholder='Password'
                    autoCapitalize='none'
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Button
                    title='Sign In'
                    onPress={this.signIn}
                />
            </ContainerView>
                
        )
    }
}