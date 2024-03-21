import BottomTabNavigator from "../navigation/BottomTabNavigator";
import * as components from "../screens";

const getComponent = (componentName) => {
  switch (componentName) {
    case "HomeScreen":
      return components.HomeScreen;
    case "DashboardScreen":
      return components.DashboardScreen;
    case "AboutUsScreen":
      return components.AboutUsScreen;
    case "ContactUsScreen":
      return components.ContactUsScreen;
    case "ProfileScreen":
      return components.ProfileScreen;
    case "SettingsScreen":
      return components.SettingsScreen;
    case "BottomTabNavigator":
      return BottomTabNavigator;
    case "Screen1":
      return components.Screen1;
    case "Screen2":
      return components.Screen2;
  }
};

export default getComponent;
