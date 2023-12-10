import React from "react";
import * as Localization from "expo-localization";
import { i18n, Language } from "@/Localization";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import { SplashScreenContainer } from "./Screens/SplashScreen";
import { LoginScreenContainer } from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}
