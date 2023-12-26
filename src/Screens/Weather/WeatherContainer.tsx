import {Weather} from "./Weather";
import React, { useState, useEffect } from "react";
import { useLazyGetWeatherQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { useSelector } from "react-redux";

export type WeatherScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WEATHER
  >;

export const WeatherContainer = ({route,navigation}) => {
  // const navigation = (screen: RootScreens) => {
  //   navigation.navigate(screen);
  // };
  const {farmindex} = route.params;
  const [weather, setWeather] = useState("Ho%20Chi%20Minh");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  useLazyGetWeatherQuery();
  useEffect(() => {
    fetchOne(weather);
  }, [fetchOne, weather]);
  // const weatherapi = useSelector((state) => state.apiweather);
  // console.log(weatherapi.queries.getWeather("Ho%20Chi%20Minh"));
  return <Weather data={data} navigation={navigation} farmindex = {farmindex} isSuccess = {isSuccess}/>;
};