/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
// import App from "./App";

// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "navigation.playground.WelcomeScreen"
//       }
//     }
//   });
// });

import { registerScreens } from './src/screens/registerscreens';

registerScreens();
Navigation.events() .registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Initialising'
            }
        },
    });
});