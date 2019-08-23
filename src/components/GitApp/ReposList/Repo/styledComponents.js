import styled from 'styled-components';
import {Image} from 'react-native';

export const RepoContainer = styled.View`
  padding: 10px;
  background-color: #f8f8ff;
  box-shadow: 10px 5px 5px white;
  margin-bottom: 5px;
`;

export const RepoText = styled.Text`
  padding-left: 5px;
`;

export const RepoName = styled.Text`
  font-weight: bold;
  font-size: 17;
`;

export const RepoInfoContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fffafa;
  box-shadow: 10px 5px 5px white;
`;

export const RepoInfoBtn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const IconImage = styled(Image)`
  width: 20;
  height: 20;
  background-color: grey;
`;
