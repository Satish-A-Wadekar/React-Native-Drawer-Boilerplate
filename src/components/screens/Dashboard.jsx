import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, Text, View } from "react-native";

const DashboardScreen = (...props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard Screen</Text>
      <Button
        onPress={() => navigation.navigate("Home", { user: "Jaya" })}
        title="Go to Home"
      />
    </View>
  );
};

export default DashboardScreen;
