import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 95%;
`;

export const Card = styled.View`
  flex: 1;
  border-radius: 6px;
  margin-right: 15px;
  margin-left: 15px;
  height: 5px;
  background: #3eee;
  box-shadow: 5px 0px 20px #00000029;
  padding-top: 50px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-left: 15px;
`;
export const SubText = styled.Text`
  padding: 10px 10px 10px 0;
  font-size: 10px;
`;
export const Avatar = styled.Image`
  width: 32;
  height: 32;
  border-radius: 50;
  margin-left: 15px;
`;
