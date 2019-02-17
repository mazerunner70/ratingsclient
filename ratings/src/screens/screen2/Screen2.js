import React from 'react';

import { View, Text, Button } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { ContainerView } from './styled';

export default class Screen2 extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Screen 2'
                },
            }
        };
    }
    render() {
        return (
            <ContainerView>
                <Text> Screen 2</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title='Go Back'
                />
            </ContainerView>
        )
    }
}