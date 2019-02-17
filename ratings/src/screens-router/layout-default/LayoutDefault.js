import React from 'react';
import { View } from 'react-native';
import  {Route, Switch } from 'react-router-native';
 
import StatusBar from '../../components/status-bar';
import HomeScreen from '../homescreen';

function LayoutDefault(props) {
    
return (
    <View style={{ flex:1, flexDirection: 'column' }}>
        <StatusBar/>
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ width:500, backgroundColor: 'skyblue' }}>
                <Switch>
                    <Route path='/' exact component={HomeScreen}/>
                </Switch>
            </View>
        </View>
    </View>
)

}

export default LayoutDefault;