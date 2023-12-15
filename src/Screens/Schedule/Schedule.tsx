import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, Modal, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { FontSize, Colors } from "@/Theme"
import { ScheduleScreenNavigatorProps } from "./ScheduleContainer";
export interface IScheduleProps {
  navigation: ScheduleScreenNavigatorProps;
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
export const Schedule = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  //Define State
  const [modelstatus, setModelStatus] = useState(1);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false); //Confirm delete UI
  const [isCreateScheduleVisible, setCreateScheduleVisible] = useState(false); //Confirm create schedule UI
  const [inputDate, setInputDate] = useState(''); // Select date in create schedule


  //Handle create schedule
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
  //Handle delete water schdule
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
  //Handle choose date
  const handleInputChange = (text: string) => {
    setInputDate(text);
  };
  const scenario = [
    {
      sche: [
        {
          waterHour: '07:00',
          waterTime: '10',
          water: '500',
        },
        {
          waterHour: '08:00',
          waterTime: '12',
          water: '700',
        }
      ]
    }
  ]
  const data = [
    {
      date: '18/10/2023',
      sche: [
        {
          waterHour: '07:00',
          waterTime: '10:00',
          water: '500',
        },
        {
          waterHour: '08:00',
          waterTime: '12:00',
          water: '700',
        }
      ]
    }

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
          <View style={styles.modelItem}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={styles.titleView}>Kịch bản tưới</Text>
              <TouchableOpacity onPress={() => { }}>
                <AntDesign name="down" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#E9F3ED' }}>
              <Text style={{ margin: 10, fontSize: 17 }}>Mô hình: Mô hình năng suất</Text>
              <View style={styles.dataItemScenario}>
                <View style={styles.container}>
                  <View style={styles.leftColumn}>
                    <Text>Thời gian</Text>
                  </View>
                  <View style={styles.midColumn}>
                    <Text>Thời lượng</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text >Lượng nước</Text>
                  </View>
                </View>
                {/* <Text>
                  Thời gian
                </Text>
                <Text>
                  Thời lượng
                </Text>
                <Text>
                  Lượng nước
                </Text> */}
              </View>
              {scenario.map((item, index) => {
                return (
                  <View key={index}>
                    {
                      <View>
                        {item['sche'] && item['sche'].map((waterTime, index) => {
                          return (
                            <View key={index} style={styles.dataItemScenario}>
                              <View style={styles.leftColumn}>
                                <Text>{waterTime.waterHour}</Text>
                              </View>
                              <View style={styles.midColumn}>
                                <Text>{waterTime.waterTime}</Text>
                              </View>
                              <View style={styles.rightColumn}>
                                <Text>{waterTime.water}</Text>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    }
                  </View>
                )
              })}
              {/* <View style={styles.dataItemScenario}>
                <Text>
                  Thời gian
                </Text>
                <Text>
                  Thời lượng
                </Text>
                <Text>
                  Lượng nước
                </Text>
              </View> */}
            </View>
          </View>


          <TouchableOpacity onPress={handleCreateSchedulePress}>
            <View style={styles.addScheduleButton}>
              <AntDesign name="pluscircleo" size={24} color="#3A6148" />
              <Text style={styles.addScheduleText}>Thêm lịch trình</Text>
            </View>
          </TouchableOpacity>

          {data.map((item, index) => {
            return (
              <View key={index} style={styles.modelItem}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  <Text style={styles.titleView} >Lịch trình của tôi</Text>
                  <TouchableOpacity onPress={() => { }}>
                    <AntDesign name="down" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                {
                  <View>
                    {item['sche'] && item['sche'].map((waterTime, index) => {
                      return (
                        <View key={index} style={{ flexDirection: 'row' }}>
                          <View style={styles.dataItem}>
                            <Text>
                              Giờ tưới: {waterTime.waterHour}
                            </Text>
                            <Text>
                              Thời gian: {waterTime.waterTime}
                            </Text>
                            <Text>
                              Lượng nước: {waterTime.water}
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
            <View style={styles.createScheduleUI}>
              <Text style={styles.confirmTitle}>Thêm lịch tưới</Text>
              <View>
                <Text style={styles.scheduleText}>Ngày:</Text>
                <View style={styles.borderBoxField}>
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="18/10/2023"
                    onChangeText={handleInputChange}
                    value={inputDate}
                    keyboardType="numeric"
                  />
                </View>
                <Text style={styles.scheduleText}>Ngày:</Text>
                <View style={styles.borderBoxField}>
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="00:00:00"
                    onChangeText={handleInputChange}
                    value={inputDate}
                    keyboardType="numeric"
                  />
                </View>
                <Text style={styles.scheduleText}>Ngày:</Text>
                <View style={styles.borderBoxField}>
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="00:00:00"
                    onChangeText={handleInputChange}
                    value={inputDate}
                    keyboardType="numeric"
                  />
                </View>
                <Text style={styles.scheduleText}>Ngày:</Text>
                <View style={styles.borderBoxField}>
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="00"
                    onChangeText={handleInputChange}
                    value={inputDate}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.confirmButtonHolder}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleCreateScheduleConfirm}>
                  <Text style={styles.buttonText}>Xác nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCreateScheduleCancel}>
                  <Text style={styles.buttonText}>Hủy bỏ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  scheduleText: {
    color: Colors.BOLD_BUTTON,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
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
    'flex': 1,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  dataItemScenario: {
    flexDirection: 'row', 'flex': 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
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
  createScheduleUI: {
    top: '20%',
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
  },
  borderBoxField: {
    borderWidth: 2,
    borderColor: 'rgba(86, 103, 137, 0.26)',
    borderRadius: 5,
  },
  scheduleTextInput: {
    fontSize: 44,
    alignSelf: 'center'
  },
  confirmButtonHolder: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginTop: 20
  },
  titleView: {
    fontSize: 20,
  },
  desView: {
    fontSize: 15,
  }, container: {
    flex: 1,
    flexDirection: 'row', // Use 'row' for a horizontal split, 'column' for a vertical split
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
