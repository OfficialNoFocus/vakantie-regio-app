import { Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountDown from 'react-native-countdown-component';

export default function CountPage() {
  const [HolidayData, setHolidayData] = useState([]);
  const [Available, SetAvailable] = useState(false);

  function getHolidayData() {
    axios
      .get(
        "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/2021-2022?output=json"
      )
      .then((res) => {
        const data = {};
        let dataSet = false;
        res.data.content[0].vacations.forEach((element) => {
          let ans = calculateDays(element.regions[0].startdate);
          if (dataSet) {
            return;
          }
          if (ans <= 0) {
            return;
          }
          data.type = element.type;
          data.regions = element.regions;
          data.daysToGo = ans;
          dataSet = true;
        });
        console.log(data);
        setHolidayData(data);
        SetAvailable(true);
      });
  }

  useEffect(() => {
    getHolidayData();
  }, []);

  function calculateDays(date) {
    const _MS_PER_DAY = 1000 * 3600 * 24;
    const date1 = new Date();
    const date2 = new Date(date);
    return Math.floor((date2 - date1) / _MS_PER_DAY);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {Available ? (
        <CountDown
          until={60 * 60 * 24 * (HolidayData.daysToGo + 1)}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={20}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
}