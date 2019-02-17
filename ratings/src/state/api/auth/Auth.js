import AWS from 'aws-sdk';
import {USERNAME, PASSWORD, POOL_CLIENT_ID, ACCESS_KEY, SECRET_KEY, REGION} from 'react-native-dotenv';

export default class Auth {
    constructor() {
        AWS.config.update({
            region: REGION,
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_KEY,
        });
        this.cognitoIdentityProvider = new AWS.CognitoIdentityServiceProvider();
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.storeDetails = this.storeDetails.bind(this);
        this.userName = USERNAME;
    }

    handleAuthentication(success, failure) {
        try {
            params= {
                AuthFlow: 'USER_PASSWORD_AUTH',
                AuthParameters: {
                    "USERNAME": USERNAME,
                    "PASSWORD": PASSWORD
                },
                ClientId: POOL_CLIENT_ID
            }
            this.cognitoIdentityProvider.initiateAuth(params, (err, data) => {
                if (err) {
                    console.log('login failure', err);
                    failure(err);
                } else {
                    result = data.AuthenticationResult;
                    this.storeDetails(result);
                    success(result);
                }
            })
        } catch(err) {
            console.log('3424', err);
            failure(err);
        }
    }

storeDetails(authBlock) {
    this.accessToken = authBlock.AccessToken;
    this.expiresIn = authBlock.ExpiresIn;
    this.refreshToken = authBlock.RefreshToken;
    this.idToken = authBlock.IdToken;
}

}