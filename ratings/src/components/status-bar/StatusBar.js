import React from 'react';
import { View } from 'react-native';
import { WhiteText } from './styled';

import { ResponsiveComponent } from 'react-native-responsive-ui';

class StatusBar extends ResponsiveComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <WhiteText>SampleText</WhiteText>
            </View>
        );
    }
}

export default StatusBar;