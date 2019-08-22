import styled from 'styled-components';
import {Image} from 'react-native';

export const RepoContainer = styled.View`
  padding: 10px;
  align-items: center;
  background-color: #f8f8ff;
  box-shadow: 10px 5px 5px white;
  margin-bottom: 5px;
`;

export const RepoText = styled.Text`
  padding-left: 10px;
`;

export const RepoName = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

export const RepoInfo = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f8f8ff;
  box-shadow: 10px 5px 5px white;
`;
