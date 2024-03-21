import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import ID from "shortid";

// custom component imports
import { screenConfig } from "../config/screenConfig";
import { getComponent, getIcon } from "../helper";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {/** Render a BottomTab Navigator separately */}
      <Drawer.Screen
        key={ID.generate()}
        name={"MainScreen"}
        component={BottomTabNavigator}
        options={{
          headerShown: true,
          drawerIcon: ({ focused, size, color }) => (
            <>{getIcon("FontAwesome", "home", color, size)}</>
          ),
        }}
      />
      {/** Render a rest of the screen components as screen */}
      {screenConfig?.length &&
        screenConfig.map((item) => {
          return (
            <Drawer.Screen
              key={item.key ?? ID.generate()}
              name={item.componentName}
              component={getComponent(item.componentName)}
            />
          );
        })}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#fff",
  },
});

export default DrawerNavigator;
