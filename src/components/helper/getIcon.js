import * as React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome5Brands,
  FontAwesome6,
  FontAwesome6Brands,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "react-native-vector-icons";

const getIcon = (iconFrom, iconName, color, size) => {
  const findIconBy = () => {
    switch (iconFrom) {
      case "AntDesign": {
        return <AntDesign name={iconName} color={color} size={size} />;
      }
      case "Entypo": {
        return <Entypo name={iconName} color={color} size={size} />;
      }
      case "EvilIcons": {
        return <EvilIcons name={iconName} color={color} size={size} />;
      }
      case "Feather": {
        return <Feather name={iconName} color={color} size={size} />;
      }
      case "FontAwesome": {
        return <FontAwesome name={iconName} color={color} size={size} />;
      }
      case "FontAwesome5": {
        return <FontAwesome5 name={iconName} color={color} size={size} />;
      }
      case "FontAwesome5Brands": {
        return <FontAwesome5Brands name={iconName} color={color} size={size} />;
      }
      case "FontAwesome6": {
        return <FontAwesome6 name={iconName} color={color} size={size} />;
      }
      case "FontAwesome6Brands": {
        return <FontAwesome6Brands name={iconName} color={color} size={size} />;
      }
      case "Fontisto": {
        return <Fontisto name={iconName} color={color} size={size} />;
      }
      case "Foundation": {
        return <Foundation name={iconName} color={color} size={size} />;
      }
      case "Ionicons": {
        return <Ionicons name={iconName} color={color} size={size} />;
      }
      case "MaterialCommunityIcons": {
        return (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        );
      }
      case "MaterialIcons": {
        return <MaterialIcons name={iconName} color={color} size={size} />;
      }
      case "Octicons": {
        return <Octicons name={iconName} color={color} size={size} />;
      }
      case "SimpleLineIcons": {
        return <SimpleLineIcons name={iconName} color={color} size={size} />;
      }
      case "Zocial": {
        return <Zocial name={iconName} color={color} size={size} />;
      }
      default: {
        return (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        );
      }
    }
  };
  return findIconBy();
};

export default getIcon;
