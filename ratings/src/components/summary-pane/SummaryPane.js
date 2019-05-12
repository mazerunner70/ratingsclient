import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MainContainer, ImageViewStyle} from './styled';
import { Navigation } from 'react-native-navigation';

import { ResponsiveComponent } from 'react-native-responsive-ui';

import bkg from './bkg.jpg';

class SummaryPane extends ResponsiveComponent {

    render() {
        console.log('876');
        return(
            <View style={{ width:250 }}>
                <TouchableOpacity onPress={this.props.pressHandler}>
                    <ImageViewStyle>
                        <ImageBackground source={bkg}
                            style={{width:250, height: 150 }} >
                            <Text>    App Store reviews</Text>
                        </ImageBackground>
                    </ImageViewStyle>
                </TouchableOpacity>
                <View style={styles.ImageViewStyle}>
                    <ImageBackground source={bkg}
                        style={{width:250, height: 150 }} >
                        <Text>    Current app versions</Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create(
{
    ImageViewStyle:
    {
        width: 250,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 4,
        overflow: 'hidden',
        margin: 5,
    }
});

export default SummaryPane;
