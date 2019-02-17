import styled from 'styled-components/native';
import { View, TextInput } from 'react-native'; 


const ContainerView = styled(View) `
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

const StyledInput = styled(TextInput) `
    width: 350;
    height: 55;
    backgroundColor: #42A5F5;
    color: white;
    borderRadius: 14;
    fontSize: 18;
    fontWeight: 500;
`;

export { ContainerView, StyledInput };