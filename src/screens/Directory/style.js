import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: #f0f0f0;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 50%;
`;

export const Card = styled.View`
  flex: 1;
  border-radius: 4px;
  margin: 0 20px;
  background: #fff;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
export const SubText = styled.Text`
  padding: 10px 10px 10px 0;
`;
