import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Center } from "native-base";
import { User } from "@/Services";
import { BackButton } from "@/Components/backbutton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { FontSize, Colors } from "@/Theme"
import { ModelScreenNavigatorProps } from "./ModelContainer";
import { SafeAreaView } from "react-native-safe-area-context";
export interface IModelProps {
  navigation: ModelScreenNavigatorProps;
  // data: User | undefined;
  // items: Farm;
}
// export interface IHomeProps {
//   data: User | undefined;
//   isLoading: boolean;
// }

// export const Home = (props: IHomeProps) => {
//   const { data, isLoading } = props;
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {isLoading ? (
//         <HStack space={2} justifyContent="center">
//           <Spinner accessibilityLabel="Loading posts" />
//           <Heading color="primary.500" fontSize="md">
//             {i18n.t(LocalizationKey.LOADING)}
//           </Heading>
//         </HStack>
//       ) : (
//         <>
//           <Text>{i18n.t(LocalizationKey.HOME)}</Text>
//           <Heading color="primary.500" fontSize="md">
//             {data?.username}
//           </Heading>
//         </>
//       )}
//     </View>
//   );
// };
export const Model = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [modelstatus, setModelStatus] = useState(1);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isCreateScheduleVisible, setCreateScheduleVisible] = useState(false);
  const handleCreateSchedulePress = () => {
    setCreateScheduleVisible(true);
  };

  const handleCreateScheduleConfirm = () => {
    // Handle confirmation delete water schedule logic here
    setCreateScheduleVisible(false);
  };

  const handleCreateScheduleCancel = () => {
    // Handle cancellation delete water schedule logic here
    setCreateScheduleVisible(false);
  };

  const handlePress = () => {
    setConfirmationVisible(true);
  };

  const handleConfirm = () => {
    // Handle confirmation delete water schedule logic here
    setConfirmationVisible(false);
  };

  const handleCancel = () => {
    // Handle cancellation delete water schedule logic here
    setConfirmationVisible(false);
  };

  const data = [
    {
      date: '18/10/2023',
      sche: [
        {
          waterHour: '07:00',
          duration: "00:30:00",
        },
        {
          waterHour: '09:00',
          duration: "00:33:00",
        },
        {
          waterHour: '011:00',
          duration: "00:31:00",
        },
      ]
    },

    {
      date: '20/10/2023',
      sche: [
        {
          waterHour: '08:00',
          duration: "00:30:00",
        },
        {
          waterHour: '09:00',
          duration: "00:33:00",
        },
        {
          waterHour: '011:00',
          duration: "00:31:00",
        },
      ]
    },

  ]
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <View style={styles.headerBarTitle}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{ marginLeft: 15 }} />
          </View>
        </View>
        <View style={styles.intro}>
          <Text style={styles.title}>Cây Xoài</Text>
          <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
          <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
          <Text style={styles.normalText}>Đất: Đất thịt</Text>
          <Text style={styles.normalText}>Diện tích: 2000 m2</Text>
        </View>
        <View style={styles.avt}>
          <Image source={require("../../../assets/Intersect.png")} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.FARMDETAIL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <AntDesign name="info" size={30} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Thông tin</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.IRRIGATIONMODE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <Entypo name="water" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Chế độ tưới</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Lịch trình tưới</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.cycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Thời tiết</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="history" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity onPress={handleCreateSchedulePress}>
            <View style={styles.addScheduleButton }>
              <AntDesign name="pluscircleo" size={24} color="#3A6148" />
              <Text style={styles.addScheduleText }>Thêm lịch trình</Text>
            </View>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={isConfirmationVisible}
            animationType="slide"
          >
            <View style={styles.confirmUI}>
              <Text style={styles.confirmTitle}>Bạn có muốn xóa</Text>
              <View style={{
                flexDirection: 'row', paddingHorizontal: 30,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.buttonText}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            transparent={true}
            visible={isCreateScheduleVisible}
            animationType="slide"
          >
            <View style={styles.confirmUI}>
              <Text style={styles.confirmTitle}>Thêm lịch trình</Text>
              <View style={{
                flexDirection: 'row', paddingHorizontal: 30,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleCreateScheduleConfirm}>
                  <Text style={styles.buttonText}>Xác nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCreateScheduleCancel}>
                  <Text style={styles.buttonText}>Hủy bỏ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {data.map((item) => {
            return (
              <View style={styles.modelItem}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  <Text style={{}}>{item['date']}</Text>
                  <TouchableOpacity onPress={() => { }}>
                    <AntDesign name="down" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                {
                  <View>
                    {item['sche'] && item['sche'].map((waterTime) => {
                      return (
                        <View style={{ flexDirection: 'row' }}>
                          <View style={styles.dataItem}>
                            <Text>
                              Giờ tưới:{"\n"}
                              {waterTime.waterHour}
                            </Text>
                            <Text>
                              Thời gian tưới: {"\n"}
                              {waterTime.duration}
                            </Text>
                          </View>
                          <TouchableOpacity style={styles.deleteBtn} onPress={handlePress}>
                            <Feather name="trash-2" size={24} color="black" />
                          </TouchableOpacity>
                        </View>

                      );
                    })}
                  </View>
                }
              </View>
            )
          })}


        </ScrollView>
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

  avt: {
    bottom: '-10%',
    right: '5%',
    position: 'absolute',
  },

  body: {
    height: '60%',
    flexDirection: 'row',
  },

  intro: {
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
    left: 25,
    marginBottom: 15,
    marginTop: 15,
  },

  normalText: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TINY,
    fontWeight: '400',
    left: 25,
    marginBottom: 15,
  },

  leftNavigation: {
    width: '25%',
    height: '100%',
    backgroundColor: Colors.BOLD_BACKGROUND,
    flexDirection: 'column',
    borderRadius: 15,
  },

  active: {
    backgroundColor: Colors.AVT_BACKGROUND,
    height: '20%',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  inactive: {
    height: '20%',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  activePress: {
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
    borderWidth: 2,
    borderColor: Colors.BOLD_BUTTON,
    marginBottom: 10,
    justifyContent: 'center',
  },

  cycle: {
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
  },

  semiTitle: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.SEMI_TITLE,
    fontWeight: '500',
    left: '5%',
    marginTop: '5%',
  },

  modelItem: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  deleteBtn: {
    alignSelf: 'center', paddingLeft: 10, paddingBottom: 15
  },
  dataItem: {
    backgroundColor: '#E9F3ED',
    flexDirection: 'row', 'flex': 1,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#416D50',
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#B83535',
  },
  confirmTitle: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TITLE,
    fontWeight: '500',
    marginBottom: 15,
    marginTop: 15,
    alignSelf: 'center',
  },
  confirmUI: {
    top: '40%',
    padding: 30,
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 16
  },
  addScheduleButton: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3A6148',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginRight: '5%',
  },
  addScheduleText: {
    color: Colors.BOLD_BUTTON,
    paddingLeft: 10
  }
});
