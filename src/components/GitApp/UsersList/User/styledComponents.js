import styled from 'styled-components';
import {Image} from 'react-native';

export const UserContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  background-color: #f8f8ff;
  box-shadow: 10px 5px 5px white;
`;

export const UserText = styled.Text`
  padding-left: 10px;
`;

export const Avatar = styled(Image)`
  width: 50;
  height: 50;
`;
