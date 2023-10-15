import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import RegularText from "@/Components/texts/RegularText";
import { SafeAreaView } from "react-native";
import BigText from "@/Components/texts/BigText";
import logo from "../../../assets//bg/logocay.png";
import { SimpleLineIcons } from "@expo/vector-icons";

const NotifyCotainer = styled(Container)`
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
  margin: 18px;
`;
const LogoContainer = styled.Image`
  width: 9%;
  resize-mode: contain;
`;
const NotfifyScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NotifyCotainer>
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
      </NotifyCotainer>
    </SafeAreaView>
  );
};
export default NotfifyScreen;
