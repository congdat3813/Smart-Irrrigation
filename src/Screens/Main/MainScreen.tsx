import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";

import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets//bg/logocay.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import TreeItem from "@/Components/item/TreeItem";
const MainScreenContainer = styled.View`
  background-color: ${colors.white};
  flex: 1;
  height: 100%;
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
const InputContainer = styled.View`
  height: 46px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #435b71;
`;
const ItemContainer = styled.ScrollView`
  height: 110%;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: col;
  overflow-y: scroll;
`;
const MainScreen: FunctionComponent = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${colors.white}`,
        flex: 1,
      }}
    >
      <MainScreenContainer>
        <Header>
          <LogoContainer source={logo}></LogoContainer>
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
          <SimpleLineIcons
            name="list"
            size={24}
            color="black"
            style={{ position: "absolute", right: 30 }}
          />
        </Header>
        <InputContainer style={{ marginHorizontal: 15, padding: 6 }}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            placeholder="Tìm kiếm"
            style={{ width: 100, flexGrow: 1, marginLeft: 10 }}
          ></TextInput>
        </InputContainer>
        <ItemContainer>
          <TreeItem
            treeName={"Cây xoài"}
            treeLocation={"Đồng Nai"}
            treeMode={false}
          ></TreeItem>
          <TreeItem
            treeName={"Cây cam"}
            treeLocation={"Đồng Nai"}
            treeMode={true}
          ></TreeItem>
          <TreeItem
            treeName={"Cây cam"}
            treeLocation={"Đồng Nai"}
            treeMode={true}
          ></TreeItem>
          <TreeItem
            treeName={"Cây cam"}
            treeLocation={"Đồng Nai"}
            treeMode={true}
          ></TreeItem>
          <TreeItem
            treeName={"Cây cam"}
            treeLocation={"Đồng Nai"}
            treeMode={true}
          ></TreeItem>
          <TreeItem
            treeName={"Cây cam"}
            treeLocation={"Đồng Nai"}
            treeMode={true}
          ></TreeItem>
        </ItemContainer>
      </MainScreenContainer>
    </SafeAreaView>
  );
};
export default MainScreen;
