import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
    View, Text, Button, AsyncStorage
} from 'react-native';

import { goToAuth } from '../auth';
import { USER_KEY } from '../config';
import { ContainerView } from './styled';

export default class Home extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    }
    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY);
            goToAuth();
        } catch (err) {
            console.log('error signing out: ', err);
        }
    }
    render() {
        return (
            <ContainerView>
                <Text>Hello from Home screen</Text>
                <Button
                    onPress={this.logout}
                    title='Sign out'
                />
                <Button
                    onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Screen2',
                            }
                        });
                    }}
                    title='View next screen'
                />
            </ContainerView>
        )
    }
}

