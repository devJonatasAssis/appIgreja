import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: #44d7ff;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 95%;
`;

export const Card = styled.View`
  flex: 1;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  background: #fff;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background: #FDFBFC;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
export const SubText = styled.Text`
  padding: 10px 10px 10px 0;
`;
