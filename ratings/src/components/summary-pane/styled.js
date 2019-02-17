import styled from 'styled-components/native';
import { Device, MediaQuerySelector } from 'react-native-responsive-ui';
import { View } from 'react-native'; 

function getPortraintQuery() {
    const { width, height } = Device.dimensions.window;
    
    return MediaQuerySelector.query({orientation: "portrait", minHeight: 459,}, width, height);
}

const MainContainer = styled(View) `
    flex: 1;
    justifyContent: center;
    alignItems: center;
    paddingTop: 0;
`;

const ImageViewStyle = styled(View) `
    width: 190;
    height: 150;
    borderTopLeftRadius: 15px;
    borderTopRightRadius: 15px;

`;


export { MainContainer, ImageViewStyle};