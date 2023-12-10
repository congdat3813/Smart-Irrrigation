import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TreeItemProps {
  textStyles?: StyleProp<TextStyle>;
  treeName: string;
  temp: string;
  moisture: string;
}
