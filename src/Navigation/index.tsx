import React, { useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { SplashScreenContainer } from "@/Screens/SplashScreen/SplashScreenContainer";
import { LoginScreenContainer } from "@/Screens/Login";
import MainScreenContainer from "@/Screens/Main/MainScreenContainer";
import ProfileScreenContainer from "@/Screens/Profile/ProfileScreenContainer";
import ProfileUpdateScreen from "@/Screens/Profile/ProfileUpdate";
import NotifyCotainer from "@/Screens/Notify/NotifyContainer";
import StatisticContainer from "@/Screens/Statics/StatisticContainer";
import { HomeContainer } from "@/Screens/Home";

// register screen
export type RootStackParamList = {
  // [RootScreens.MAIN]: undefined;
  // [RootScreens.WELCOME]: undefined;
  [RootScreens.SPLASH]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.MAINTREE]: undefined;
  [RootScreens.PROFILE]: undefined;
  [RootScreens.UPDATEPROFILE]: undefined;
  [RootScreens.NOTIFY]: undefined;
  [RootScreens.STATISTIC]: undefined;
  [RootScreens.HOME]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* {isLoggedIn ? (
          <>
            <RootStack.Screen
              name={RootScreens.SPLASH}
              component={SplashScreenContainer}
              options={{}}
            ></RootStack.Screen>
          </>
          ) : (
          <RootStack.Screen
            name={RootScreens.LOGIN}
            component={LoginScreenContainer}
            options={{}}
          ></RootStack.Screen>
        )} */}
        <RootStack.Screen
          name={RootScreens.SPLASH}
          component={SplashScreenContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.HOME}
          component={HomeContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.NOTIFY}
          component={NotifyCotainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.STATISTIC}
          component={StatisticContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.UPDATEPROFILE}
          component={ProfileUpdateScreen}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.PROFILE}
          component={ProfileScreenContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.MAINTREE}
          component={MainScreenContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginScreenContainer}
          options={{}}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
