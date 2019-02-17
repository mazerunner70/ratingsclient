import  { Navigation } from 'react-native-navigation';

import Initialising from './initialising/Initialising';
import Home from './home/Home';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Screen2 from './screen2/Screen2';

export function registerScreens() {
    Navigation.registerComponent('Initialising', () => Initialising);
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('SignUp', () => SignUp);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('Screen2', () => Screen2);
}