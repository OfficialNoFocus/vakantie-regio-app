import React, { useState, useEffect } from "react";
import { Settings, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SettingsTab({ navigation }) {
  const [Region, setRegion] = useState(getRegion);
  const setNewRegion = async (region) => {
    setRegion(region);
    try {
      await AsyncStorage.setItem("Region", region);
    } catch (e) {
      console.log(e);
    }
    console.log(region);
  };
  const getRegion = async () => {
    try {
      region = await AsyncStorage.getItem("Region");
    } catch (e) {
      console.log(e);
    }
    setRegion(region);
    // return region;
  };
  getRegion();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          width: 150,
        }}
      >
        <Picker
          selectedValue={Region}
          onValueChange={(itemValue, itemIndex) => setNewRegion(itemValue)}
        >
          <Picker.Item label="noord" value="noord" />
          <Picker.Item label="midden" value="midden" />
          <Picker.Item label="zuid" value="zuid" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Information')}>
        <Text>Ontwikkelaar informatie</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SettingsTab;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#77b7f7',
    padding: '5%',
    margin:'5%',
    width: '70%',
  },
});