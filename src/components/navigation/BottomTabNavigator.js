import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet } from "react-native";
import ID from "shortid";

// custom component imports
import { bottomMenuConfig } from "../config/menuConfig";
import { getComponent, getIcon } from "../helper";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {bottomMenuConfig?.length &&
        bottomMenuConfig.map((item) => {
          return (
            <Tab.Screen
              key={item.key ?? ID.generate()}
              name={item?.label}
              component={getComponent(item?.screen?.component)}
              options={{
                tabBarLabel: item?.label,
                headerTitle: `Bottom Tab title - ${item?.screen?.header}`,
                headerShown: true,
                tabBarIcon: ({ color, size }) => (
                  <>
                    {getIcon(
                      item?.icon?.library,
                      item?.icon?.name,
                      item?.icon?.color ?? color,
                      item?.icon?.size ?? size
                    )}
                  </>
                ),
              }}
            />
          );
        })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;
