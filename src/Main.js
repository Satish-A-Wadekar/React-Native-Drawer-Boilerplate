import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Appearance } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

// custom component imports
import DrawerNavigator from "./components/navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  const navigationRef = useNavigationContainerRef();
  const scheme = Appearance.getColorScheme();
  useReduxDevToolsExtension(navigationRef);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName="DrawerNavigator"
          useLegacyImplementation
        >
          <Stack.Screen
            name="DrawerRootScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          {/*
          // uncomment if you want only bottom menu
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainScreen;
