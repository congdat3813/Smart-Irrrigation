import { i18n, LocalizationKey } from "@/Localization";
import React, {useEffect, useState} from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { ActivityIndicator, FlatList, View, Text, StyleSheet, Image, Pressable} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import { BackButton } from "@/Components/backbutton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {WeatherScreenNavigatorProps} from "./WeatherContainer";
import { SafeAreaView } from "react-native-safe-area-context";


export interface IWeatherProps {
    navigation: WeatherScreenNavigatorProps;
}

export const Weather = (props: {
  onNavigate: (string: RootScreens) => void;
  }) => {
  return(
    <SafeAreaView style={{backgroundColor: Colors.AVT_BACKGROUND,}}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <View style={styles.headerBarTitle}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
          </View>
        </View>
        <View style={styles.intro}>
          <View style={{left: 25, marginBottom: 15, }}>
            <Text style={styles.title}>Cây Xoài</Text>
          </View>
          <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
          <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
          <Text style={styles.normalText}>Đất: Đất thịt</Text>
          <Text style={styles.normalText}>Diện tích: 2000 m2</Text>
        </View>
        <View style={styles.avt}>
          <Image source={ require("../../../assets/Intersect.png")} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.FARMDETAIL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <AntDesign name="info" size={30} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Thông tin</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.IRRIGATIONMODE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <Entypo name="water" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Chế độ tưới</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Mô hình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Thời tiết</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="history" size={20} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.info}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.realTimeWeather}>
                <View style={styles.realTimeWeatherTop}>
                  <View style={styles.realTimeWeatherIcon}>
                    <Ionicons name='cloudy' size={80} color={Colors.BOLD_BUTTON}/>
                  </View>
                  <View style={styles.realTimeWeatherInfo}>
                    <Text style={styles.realTempText}>32&#176;</Text>
                    <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>Nhiều mây</Text>
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.realTimeWeatherBottom}>
                  <View style={styles.chanceOfRain}>
                    <Text style={styles.smallText}  adjustsFontSizeToFit={true} numberOfLines={1}>Phần trăm mưa</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                      <Ionicons name='rainy-outline' size={23} color={Colors.BOLD_BUTTON} />
                      <View style={{marginLeft: 5,}}>
                        <Text style={styles.smallText}>50%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.humidity}>
                    <Text style={styles.smallText}>Độ ẩm</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                      <Ionicons name='water-outline' size={23} color={Colors.BOLD_BUTTON} />
                      <View style={{marginLeft: 5,}}>
                        <Text style={styles.smallText}>50%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.hoursWeather}>
                <Text style={styles.title}>Thời tiết theo giờ</Text>
                <ScrollView horizontal={true} style={styles.hoursScrollView}>
                  <View style={styles.hoursWeatherItem}>
                    <Text>Bây giờ</Text>
                    <Ionicons name='cloudy-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <Text>32&#176;</Text>
                    <Text>50% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text>20</Text>
                    <Ionicons name='cloudy-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <Text>32&#176;</Text>
                    <Text>50% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text>21</Text>
                    <Ionicons name='cloudy-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <Text>32&#176;</Text>
                    <Text>50% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text>22</Text>
                    <Ionicons name='cloudy-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <Text>32&#176;</Text>
                    <Text>50% mưa</Text>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
        height: '40%',
        backgroundColor: Colors.AVT_BACKGROUND,
    },

    headerBar: {
        height: '5%',
        width: '100%',
        backgroundColor: Colors.AVT_BACKGROUND,
        justifyContent: 'flex-end',
        marginBottom: '10%',
    },

    headerBarTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
    },

    avt:{
        bottom: '-10%',
        right: '5%', 
        position: 'absolute',
    },

    body:{
        height: '60%',
        flexDirection: 'row',
    },

    intro:{
        width: '100%',
    },

    large: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TITLE, 
        fontWeight: '500',
        left: 25,
        marginBottom: 15,
        marginTop: 15,
    },

    title: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TITLE, 
        fontWeight: '500',
    },

    normalText: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        left: 25,
        marginBottom: 15,
    },

    leftNavigation:{
        width: '25%',
        height: '100%',
        backgroundColor: Colors.BOLD_BACKGROUND,
        flexDirection: 'column',
        borderRadius: 15,
    },
        
    active:{
        backgroundColor: Colors.AVT_BACKGROUND,
        height: '20%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },   
        
    inactive:{
        height: '20%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },    
        
    activePress:{
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    activeCycle: {
        width: 40, 
        height: 40,
        flexDirection: 'column',
        backgroundColor: Colors.AVT_BACKGROUND, 
        borderRadius: 9999, 
        borderWidth: 4,
        borderColor: Colors.BOLD_BUTTON,
        marginBottom: 10,
        justifyContent: 'center',
    },
        
    cycle:{
        width: 40, 
        height: 40,
        flexDirection: 'column',
        backgroundColor: Colors.AVT_BACKGROUND, 
        borderRadius: 9999, 
        borderWidth: 1,
        borderColor: Colors.BOLD_BACKGROUND,
        marginBottom: 10,
        justifyContent: 'center',
    },

    activeContent: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SMALL, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
    },

    inactiveContent: {
        color: Colors.WHITE, 
        fontSize: FontSize.SMALL, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
    },

    iconStyle: {
        alignSelf: 'center',
    },

    info: {
        width: '75%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    semiTitle: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SEMI_TITLE, 
        fontWeight: '500',
        left: '5%',
        marginTop: '5%',
    },

    smallText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: FontSize.SMALL, 
      fontWeight: '500',
    },

    scrollView: {
      backgroundColor: Colors.NORMAL_BACKGROUND,
      width: '90%',
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    realTimeWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    realTimeWeatherTop: {
      flexDirection: 'row',
    },

    realTimeWeatherBottom: {
      flexDirection: 'row',
    },

    realTimeWeatherIcon: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTimeWeatherInfo: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTempText: {
      fontSize: 60,
      color: Colors.BOLD_BUTTON,
    },

    line: {
      backgroundColor: Colors.BOLD_BUTTON,
      width: '90%',
      height: 5,
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    chanceOfRain: {
      width: '50%',
      alignItems: 'center',
    },

    humidity: {
      width: '50%',
      alignItems: 'center',
    },

    hoursWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    hoursScrollView: {
      flexDirection: 'row',
    },

    hoursWeatherItem: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: 5,
      margin: 15,
      marginLeft: 0,
    },
});