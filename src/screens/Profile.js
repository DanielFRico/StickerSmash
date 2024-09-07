import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useEffect } from "react";
import { getUser, updateUser } from "../../userService";
import { Button } from "@rneui/themed";
import { Input, Icon } from "@rneui/themed";

export const Profile = () => {
  const userId = "qZquDv4abWhyL4r9Gi64t0EiTiQ2";
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await getUser(userId);
      if (user) setUser(user);
    };
    getUserInfo();
  }, []);

  const onChange = (key, value) => {
    setUser((prevData) => ({ ...prevData, [key]: value }));
  };

  const updateUserData = async () => {
    updateUser(userId, user);
  };

  return user ? (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: 200, height: 200, alignSelf: "center" }}
        source={{ uri: user.photo }}
      />
      <Input
        label="Name"
        placeholder="Enter Name"
        value={user.name}
        onChangeText={(text) => onChange("name", text)}
      />
      <Input
        value={user.phone}
        onChangeText={(text) => onChange("phone", text)}
      />
      <Input
        value={user.photo}
        onChangeText={(text) => onChange("photo", text)}
        multiline
      />
      <Button onPress={updateUserData} title={"Actualizar"} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({});
