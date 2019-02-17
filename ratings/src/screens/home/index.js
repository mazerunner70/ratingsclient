import { Navigation } from 'react-native-navigation';


export const goToHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ]
        }
    }
})
