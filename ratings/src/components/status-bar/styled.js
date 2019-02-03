import styled from 'styled-components/native';
import { Device, MediaQuerySelector } from 'react-native-responsive-ui';
import { Text } from 'react-native'; 

function getPortraintQuery() {
    const { width, height } = Device.dimensions.window;
    
    return MediaQuerySelector.query({orientation: "portraint", minHeight: 459,}, width, height);
}

const WhiteText = styled(Text) `
    color: white;
    backgroundColor: black;
    padding: 10px 10px 5px 5px;
`;

export { WhiteText};