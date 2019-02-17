import  React from 'react';
import {
    AsyncStorage
} from 'react-native';

import { WelcomeText, ContainerView } from './styled';
import { goToHome } from '../home';
import { goToAuth } from '../auth';
import { USER_KEY } from '../config';

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            console.log('user1: ', user);
            if (user) {
                goToHome();
            } else {
                goToAuth();
            }
        } catch (err) {
            console.log('error: ', err);
            gotoAuth();
        }
    }
    render() {
        return (
            <ContainerView>
                <WelcomeText>Loading</WelcomeText>
            </ContainerView> 
        )
    }
}