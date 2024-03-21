import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// custom component imports
import { backButtonConfig, drawerMenuConfig } from "../config/menuConfig";
import { getIcon } from "../helper";

const DrawerContent = (props) => {
  const [currentMenu, setCurrentMenu] = useState(drawerMenuConfig[0]);
  const [history, setHistory] = useState([]);

  const navigateForward = (index) => {
    const item = currentMenu.children[index];
    if (item) {
      if (item.children.length === 0) {
        // close drawer
        props.navigation.toggleDrawer();
        // redirect to targeted screen
        props.navigation.navigate("DrawerRootScreen", {
          screen: item?.screen?.component,
        });
      } else {
        // save state for next drawer inner drill down
        setHistory([...history, currentMenu]);
        setCurrentMenu(item);
      }
    } else {
      console.log("No submenu at this index.");
    }
  };

  const navigateBackward = () => {
    if (history.length > 0) {
      const previousMenu = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentMenu(previousMenu);
    } else {
      console.log("Cannot navigate back further.");
    }
  };

  const menuTitle = (item, focused, color) => {
    return (
      <View style={styles.drawerItem}>
        <Text>{item.label}</Text>
        <View>
          {item.children.length > 0 ? (
            <>{getIcon("Ionicons", "chevron-forward-outline", "#FC2E02", 20)}</>
          ) : (
            <Text>{""}</Text>
          )}
        </View>
      </View>
    );
  };

  const renderMenus = () => {
    return (
      <>
        {history.length > 0 && (
          <DrawerItem
            key={"Back"}
            label={"Back"}
            onPress={() => navigateBackward()}
            icon={({ focused, size, color }) => (
              <>
                {getIcon(
                  backButtonConfig[0]?.icon?.library,
                  backButtonConfig[0]?.icon?.name,
                  backButtonConfig[0]?.icon?.color ?? color,
                  backButtonConfig[0]?.icon?.size ?? size
                )}
              </>
            )}
          />
        )}
        {currentMenu.children.map((item, index) => (
          <DrawerItem
            key={item.id}
            onPress={() => {
              navigateForward(index);
            }}
            label={({ focused, color }) => menuTitle(item, focused, color)}
            icon={({ focused, size, color }) => (
              <>
                {getIcon(
                  item?.icon?.library,
                  item?.icon?.name,
                  item?.icon?.color ?? color,
                  item?.icon?.size ?? size
                )}
              </>
            )}
          >
            {menuTitle(item)}
          </DrawerItem>
        ))}
      </>
    );
  };

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.headerBar}>
        <Text style={{ color: "#fff" }}>Logo</Text>
      </View>
      {renderMenus()}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: "#4f4f4f",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -5,
  },
  drawerItem: {
    flexGrow: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DrawerContent;
