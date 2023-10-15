import React, { FunctionComponent } from "react";
import { MainNavigator } from "@/Navigation/Main";
import { NativeBaseProvider } from "native-base";

export const Home = () => {
  return (
    <NativeBaseProvider>
      <MainNavigator></MainNavigator>
    </NativeBaseProvider>
  );
};
