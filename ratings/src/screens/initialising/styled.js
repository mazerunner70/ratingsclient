import styled from 'styled-components/native';
import { Text, View } from 'react-native'; 


const WelcomeText = styled(Text) `
    fontSize: 28;
`;

const ContainerView = styled(View) `
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

export { WelcomeText, ContainerView };