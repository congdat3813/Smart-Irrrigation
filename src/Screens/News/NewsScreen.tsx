import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styled from "styled-components/native";
import { Container } from "../../Components/shared";
import BigText from "@/Components/texts/BigText";
import logo from "../../../assets/bg/logocay.png";
import { AntDesign } from '@expo/vector-icons';
import { Button, Column, Flex, View } from "native-base";
import { i18n, LocalizationKey } from "@/Localization";
import { Dimensions} from "react-native";
import { NewsScreenNavigatorProps } from "./NewsContainer";
import { RootScreens } from "..";
import { Image2 } from "styled-icons/evaicons-solid";


const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

export interface NewsProps {
  navigation: NewsScreenNavigatorProps;
}

const images = [
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
];

const images2 = [
  require("../../../assets/img/News/image8.png"),
  require("../../../assets/img/News/image8.png"),
];


const NewsContainer = styled(Container)`
  justify-content: flex-start;
  height: 100%;
  flex: 1;
`;
const Header = styled.View`
  width: 100%;
  height: 50px;
  top: 0;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.Image`
  width: 9%;
  resize-mode: contain;
`;



export const NewsScreen = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NewsContainer>
        <Header>
          <LogoContainer
            source={logo}
            style={{ marginLeft: 18 }}
          ></LogoContainer>
          <BigText
            textStyles={{
              fontSize: 25,
              marginStart: 5,
              fontWeight: "300",
              color: "#0D986A",
            }}
          >
            PLANTSCAPE
          </BigText>
        </Header>
        <View style={{ display: "flex", width: 345, alignItems: "flex-start", gap: 70}}>
            <Text style={{color: "#0D986A", fontFamily: "Actor", fontSize: 18, fontStyle: "normal" }}> Tin mới</Text>
        </View>
        <Main>
            <ScrollView>
              <ScrollView horizontal={true}>
                {images.map((image, index) => (
                  <View
                    key={index}
                    style={{
                      width: 300 * screenScale,
                      height: 200 * screenScale,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                      }}
                    />
                  </View>
                ))}
              </ScrollView>

              <ScrollView horizontal={true}>
                  {/* add 5 button */}
                  <Button style={styles.buttonView}>
                    <Text style={styles.buttonText}> Tin tức</Text>
                  </Button>
                  <Button style={styles.buttonView}>
                    <Text style={styles.buttonText}> Mùa vụ</Text>
                  </Button>
                  <Button style={styles.buttonView}>
                    <Text style={styles.buttonText}> Thời tiết</Text>
                  </Button>
                  <Button style={styles.buttonView}>
                    <Text style={styles.buttonText}> Phân bón</Text>
                  </Button>
              </ScrollView>


              <ScrollView>
                {images2.map((images, index) => (
                  <View
                    key={index}
                    style={{
                      width: 300 * screenScale,
                      height: 200 * screenScale,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={images}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                ))}
              </ScrollView>        
            </ScrollView>
        </Main>
      </NewsContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    buttonView: {
      width: 100,
      height: 40,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: "white",
      borderRadius: 16,
      border: "1px #E9F3ED solid",
      justifyContent: 'center', 
      alignItems: 'center',
      gap: 8,
    },
    buttonText: {
      color: "#2E0505",
      fontFamily: "Nunito",
      fontSize: 12,
      fontWeight: '600',
      wordWrap: 'break-word',
    },

});

export default NewsScreen;