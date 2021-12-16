import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';

function Home({navigation}) {
  const [HolidayData, setHolidayData] = useState([]);
  const [Available, SetAvailable] = useState(false);
  const [SchoolYear, SetSchoolYear] = useState("2021-2022");
  const [Region, setRegion] = useState();

  function getHolidayData() {
    axios
    .get(
      "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/" +
        SchoolYear +
        "?output=json"
    )
      .then((res) => {
        const data = res.data.content[0];
        setHolidayData(data);
        SetAvailable(true);
      });
  }
  const getRegion = async () => {
    try {
      region = await AsyncStorage.getItem("Region");
    } catch (e) {
      console.log(e);
    }
    setRegion(region);
  };

  useEffect(() => {
    getHolidayData();
    getRegion();
  }, [SchoolYear]);

  return (
    <ScrollView style={{ marginTop: 35 }}>
      <Text style={{ backgroundColor: "white" }}>{HolidayData.title}</Text>
      <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate('Details')}>
            <Text>Dagen tot volgende Vakantie</Text>
      </TouchableOpacity>
      <Picker
        style={{ backgroundColor: "white" }}
        selectedValue={SchoolYear}
        onValueChange={(itemValue, itemIndex) => SetSchoolYear(itemValue)}
      >
        <Picker.Item label="2021-2022" value="2021-2022" />
        <Picker.Item label="2022-2023" value="2022-2023" />
        <Picker.Item label="2023-2024" value="2023-2024" />
      </Picker>
      {Available ? (
        HolidayData.vacations.map((d, i) => (
          <ListItem key={i} topDivider>
            <ListItem.Content>
              <ListItem.Title>{d.type}</ListItem.Title>
              {d.regions.map((sd, i) =>
                sd.region == Region ? (
                  <ListItem.Subtitle key={i}>
                    {sd.region}: {sd.startdate.slice(0, 10)} -{" "}
                    {sd.enddate.slice(0, 10)}
                  </ListItem.Subtitle>
                ) : null || sd.region == "heel Nederland" ? (
                  <ListItem.Subtitle key={i}>
                    {sd.region}: {sd.startdate.slice(0, 10)} -{" "}
                    {sd.enddate.slice(0, 10)}
                  </ListItem.Subtitle>
                ) : null
              )}
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
}

export default Home;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#77b7f7',
    padding: '5%',
    width: '100%',
  },
});