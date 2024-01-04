import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import RegularText from "@/Components/texts/RegularText";
import userImage from "../../../assets//bg/UserImage.png";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import RegularButton from "@/Components/button/RegularButton";
import { SafeAreaView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RootScreens } from "..";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/Store/reducers/profile";
import { useUpdateUserMutation } from "@/Services";
import { layoutPropsList } from "native-base/lib/typescript/components/composites/Typeahead/types";
// import { editprofile } from "@/Store/reducers/profile";

const ProfileUpdateScreenContainer = styled(Container)`
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  background-color: "#F9F9F9";
  flex-direction: column;
`;
const SubContainer = styled.View`
  height: 54px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 17px;
`;
const UserImageContainer = styled.Image`
  width: 30%;
  height: 15%;
  resize-mode: contain;
  margin-top: 30px;
  margin-bottom: 21px;
`;
const Wrapper = styled.View`
  margin-horizontal: 30px;
  flex-direction: row;
`;
const Divider = styled.View`
  width: 2px;
  height: 100%;
  margin-vertical: 1px;
  margin-horizontal: 10px;
  background-color: ${colors.gray};
  border-radius: 10px;
`;
const ProfileUpdateScreen: FunctionComponent = () => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [editProfile,result] = useUpdateUserMutation();
  const profile = useSelector((state) => state.profile);
  const [fnameInput, setFNameInput] = useState(profile.firstName);
  const [lnameInput, setLNameInput] = useState(profile.lastName);
  const [emailInput, setEmailInput] = useState(profile.email); 
  const dispatch = useDispatch();
  const handleEmailChange = (text: string) => {
    setEmailInput(text);
  };
  const handleFNameChange = (text: string) => {
    setFNameInput(text);
  };
  const handleLNameChange = (text: string) => {
    setLNameInput(text);
  };

  const handleConfirm = async () => {
    dispatch(updateUser({ firstName: fnameInput, lastName: lnameInput, email: emailInput}));
    const body = {
      firstName: fnameInput, 
      lastName: lnameInput, 
      email: emailInput
  };
    const id = profile.id;
    // const firstName = profile.firstName;
    // const lastName = profile.lastName; 
    // const email = profile.email;
    // await editProfile({id, firstName, lastName, email}).unwrap();
    await editProfile({id, body}).unwrap();
    // console.log(result);
    // console.log(profile.firstName, profile.lastName, profile.email);
    navigaiton.goBack();
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", flex: 1 }}>
      <ProfileUpdateScreenContainer>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color="black"
          style={{ alignSelf: "flex-start", margin: 10 }}
          onPress={() => {
            navigaiton.goBack();
          }}
        />
        <UserImageContainer source={userImage}></UserImageContainer>
        <RegularText textStyles={{ color: `${colors.black}`, fontSize: 20 }}>
        {(profile.firstName? profile.firstName : "") + " " +(profile.lastName? profile.lastName : "")}
        </RegularText>
        <SubContainer>
          <TextInput placeholder="Họ" style={{ flexGrow: 1 }} onChangeText={handleFNameChange} value={fnameInput}/>
        </SubContainer>

        <SubContainer>
          <TextInput placeholder="Tên" style={{ flexGrow: 1 }} onChangeText={handleLNameChange} value={lnameInput}/>
        </SubContainer>

        <SubContainer>
          <Feather
            name="mail"
            size={24}
            color="gray"
            style={{ marginLeft: 2 }}
          />
          <Divider></Divider>
          <TextInput
            placeholder="Email"
            style={{ flexGrow: 1 }}
            onChangeText={handleEmailChange} value={emailInput}
          ></TextInput>
        </SubContainer>
       
        <Wrapper>
          <RegularButton
            onPress={
              handleConfirm
            }
            btnStyles={{ marginTop: 20, flexGrow: 1 }}
            textStyles={{ color: `${colors.white}`, fontSize: 20 }}
          >
            Cập nhật
          </RegularButton>
        </Wrapper>
      </ProfileUpdateScreenContainer>
    </SafeAreaView>
  );
};
export default ProfileUpdateScreen;
