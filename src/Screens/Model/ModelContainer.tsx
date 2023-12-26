import { Model} from "./Model";
import React, { useState, useEffect } from "react";
// import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type ModelScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.MODEL
  >;
  
export const ModelContainer = ({route, navigation}) => {
  
  // const navigation = (screen: RootScreens) => {
  //   navigation.navigate(screen);
  // };
  const {farmindex} = route.params;
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <Model navigation={navigation} farmindex={farmindex}/>;
};
