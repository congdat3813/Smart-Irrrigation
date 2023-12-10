import React, { FunctionComponent, useState } from "react";
import { Container } from "@/Components/shared";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TextInput } from "react-native";
import BigText from "@/Components/texts/BigText";
import { colors } from "@/Components/colors";
import RegularButton from "@/Components/button/RegularButton";
import { addItem } from "@/Store/reducers";
import { useDispatch } from "react-redux";
import { TreeItemProps } from "@/Components/item/TreeItem";

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
const AddFarmScreen: FunctionComponent = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState<TreeItemProps>({
      treeName: '',
      temp: '',
      moisture: '',
    });
    const handleAddItem = () => {
      dispatch(addItem(newItem));
      setNewItem({
        treeName:'',
        temp: '',
        moisture: '',
      });
    };
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", flex: 1 }}>
      <SubContainer style={{backgroundColor:"#F9F9F9"}}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color="black"
          style={{ alignSelf: "flex-start", marginLeft:3, marginRight:15 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <BigText textStyles={{ textAlign: "center", fontSize:30 , fontWeight: "300"}}>
          THÔNG TIN NÔNG TRẠI
        </BigText>
      </SubContainer>
      <SubContainer style={{marginTop:30}}>
          <TextInput
            placeholder="Ten nong trai"
            style={{ flexGrow: 1 , padding:10}}
            value={newItem.treeName}
            onChangeText={(text) =>
              setNewItem({ ...newItem, treeName: text })
            }
          ></TextInput>
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Dia chi"
            style={{ flexGrow: 1 , padding:10}}
          ></TextInput>
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Loai cay"
            style={{ flexGrow: 1 , padding:10}}
            value={newItem.temp}
            onChangeText={(text) =>
              setNewItem({ ...newItem, temp: text })
            }
          ></TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Loai dat"
            style={{ flexGrow: 1 , padding:10}}
            value={newItem.moisture}
            onChangeText={(text) =>
              setNewItem({ ...newItem, moisture: text })
            }
          ></TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </SubContainer>
        <RegularButton
            onPress={() => {
              handleAddItem
              navigation.goBack();
            }}
            btnStyles={{ marginVertical: 40, width: 130 , alignSelf:'center'}}
            textStyles={{ color: `${colors.white}`, fontSize: 20 }}
          >
            Save
        </RegularButton>
    </SafeAreaView>
  );
};
export default AddFarmScreen;
