import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";

import { HomeContainer } from "@/Screens/Home";
import { FarmDetailContainer } from "@/Screens/FarmDetail";
import { ModelContainer } from "@/Screens/Model";
import { HistoryContainer } from "@/Screens/History";
import { SplashScreenContainer } from "@/Screens/SplashScreen/SplashScreenContainer";
import { LoginScreenContainer } from "@/Screens/Login";
import MainScreenContainer from "@/Screens/Main/MainScreenContainer";
import ProfileScreenContainer from "@/Screens/Profile/ProfileScreenContainer";
import ProfileUpdateScreen from "@/Screens/Profile/ProfileUpdate";
import NotifyCotainer from "@/Screens/Notify/NotifyContainer";
import StatisticContainer from "@/Screens/Statics/StatisticContainer";
import AddFarmScreenContainer from "@/Screens/AddFarm/AddFarmContainer";
import RegisterScreen01 from "@/Screens/Login/Register/RegisterScreen_1";
import RegisterScreen02 from "@/Screens/Login/Register/RegisterScreen_2";
import RegisterScreen03 from "@/Screens/Login/Register/RegisterScreen_3";
import RegisterScreen04 from "@/Screens/Login/Register/RegisterScreen_4";
import { WeatherContainer } from "@/Screens/Weather";
import { ScheduleContainer } from "@/Screens/Schedule";
import NewsContainer from "@/Screens/News/NewsContainer";
export type RootStackParamList = {
  // [RootScreens.MAIN]: undefined;
  // [RootScreens.WELCOME]: undefined;
  [RootScreens.SPLASH]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.HOME]: undefined;
  [RootScreens.FARMDETAIL]: undefined;
  [RootScreens.HISTORY]: undefined;
  [RootScreens.MAINTREE]: undefined;
  [RootScreens.MODEL]: undefined;
  [RootScreens.NOTIFY]: undefined;
  [RootScreens.REPORT]: undefined;
  [RootScreens.PROFILE]: undefined;
  [RootScreens.UPDATEPROFILE]: undefined;
  [RootScreens.WEATHER]: undefined;
  [RootScreens.ADDFARM]: undefined;
  [RootScreens.REGISTER1]:undefined;
  [RootScreens.REGISTER2]:undefined;
  [RootScreens.REGISTER3]:undefined;
  [RootScreens.REGISTER4]:undefined;
  [RootScreens.STATISTIC]: undefined;
  [RootScreens.SCHEDULE]:undefined;
  [RootScreens.NEWS]:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        /> */}
        {/* <RootStack.Screen
          name={RootScreens.HOME}
          component={HomeContainer}
        /> */}
        <RootStack.Screen
          name={RootScreens.NEWS}
          component={NewsContainer}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginScreenContainer}
          options={{}}
        ></RootStack.Screen>
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
          name={RootScreens.REGISTER1}
          component={RegisterScreen01}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.REGISTER4}
          component={RegisterScreen04}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.REGISTER2}
          component={RegisterScreen02}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.REGISTER3}
          component={RegisterScreen03}
          options={{}}
        ></RootStack.Screen>
        <RootStack.Screen
          name={RootScreens.ADDFARM}
          component={AddFarmScreenContainer}
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
          name={RootScreens.FARMDETAIL}
          component={FarmDetailContainer}
        />
        <RootStack.Screen
          name={RootScreens.MODEL}
          component={ModelContainer}
        />
        <RootStack.Screen
          name={RootScreens.HISTORY}
          component={HistoryContainer}
        />
        <RootStack.Screen
        name={RootScreens.WEATHER}
        component={WeatherContainer}
        />
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
          name={RootScreens.SCHEDULE}
          component={ScheduleContainer}
          options={{}}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
