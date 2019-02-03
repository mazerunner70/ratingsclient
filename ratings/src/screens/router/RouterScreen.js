import React from 'react';
import { NativeRouter } from 'react-router-native';
import LayoutDefault from '../../screens/layout-default';

function RouterScreen(props) {
    return (
        <NativeRouter>
            <LayoutDefault/>
        </NativeRouter>
    )
}

export default RouterScreen;