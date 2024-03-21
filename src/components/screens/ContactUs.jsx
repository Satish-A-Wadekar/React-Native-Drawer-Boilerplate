import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, Text, View } from "react-native";

const ContactUsScreen = (...props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Us Screen</Text>
      <Button
        onPress={() => navigation.navigate("MainScreen", { user: "Satish" })}
        title="Go to Home"
      />
    </View>
  );
};

export default ContactUsScreen;
