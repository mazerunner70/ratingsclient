import React from 'react';

import { View, Button, TextInput } from 'react-native';
import { ContainerView, StyledInput } from './styled';

export default class SignUp extends React.Component {
    state = {
        username: '', password: '', email: '', phoneNumber: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { username, password, email, phoneNumber } = this.state;
        try {
            console.log('user successfully signed up!: ');
        } catch (err) {
            console.log('error signing up: ', err);
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
                <StyledInput
                    placeholder='Email'
                    autoCapitalize='none'
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <StyledInput
                    placeholder='Phone Number'
                    autoCapitalize='none'
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('phoneNumber', val)}
                />
                <Button
                    title='Sign Up'
                    onPress={this.signUp}
                />
            </ContainerView>
        )
    }
}