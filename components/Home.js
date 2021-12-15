import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';

function Home({navigation}) {
  const [HolidayData, setHolidayData] = useState([]);
  const [Available, SetAvailable] = useState(false);

  function getHolidayData() {
    axios
      .get(
        "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/2021-2022?output=json"
      )
      .then((res) => {
        const data = res.data.content[0];
        setHolidayData(data);
        SetAvailable(true);
      });
  }

  useEffect(() => {
    getHolidayData();
  }, []);

  return (
    <ScrollView style={{ marginTop: 35 }}>
      <Text style={{ backgroundColor: "white" }}>{HolidayData.title}</Text>
      <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate('Details')}>
            <Text>Dagen tot volgende Vakantie</Text>
      </TouchableOpacity>
      {Available ? (
        HolidayData.vacations.map((d, i) => (
          <ListItem key={i} topDivider>
            <ListItem.Content>
              <ListItem.Title>{d.type}</ListItem.Title>
              {d.regions.map((sd, i) => (
                <ListItem.Subtitle key={i}>
                  {sd.region}: {sd.startdate.slice(0, 10)} -{" "}
                  {sd.enddate.slice(0, 10)}
                </ListItem.Subtitle>
              ))}
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