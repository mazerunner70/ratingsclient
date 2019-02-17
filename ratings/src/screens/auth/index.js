import {Navigation } from 'react-native-navigation';
import signup from './signup.png';
import signin from './signin.png';

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            options: {
                bottomTabs: {
                    titleDisplayMode: 'alwaysShow',
                },
            },
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 16,
                                text: 'Sign In',
                                icon: signin
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12,
                                icon: signup
                            }
                        }
                    },
                },
             ],
        }
    }
});