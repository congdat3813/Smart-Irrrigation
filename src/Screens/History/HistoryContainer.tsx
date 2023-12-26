import { History} from "./History";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type HistoryScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.HISTORY
  >;
  
export const HistoryContainer = ({route, navigation}) => {
  
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
  return <History navigation={navigation} farmindex={farmindex}/>;
};
