import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function Information() {
  return (
    <View>
      <View>
        <Text style={styles.Title}>Applicatie informatie:</Text>
        <Text style={styles.Text}>Dit is de vakantie rooster app, deze is gemaakt voor het examen vak APP.</Text>
      </View>
      <View>
        <Text style={styles.Title}>Ontwikkelaar:</Text>
        <Text style={styles.Text}>Mick van der Woude</Text>
      </View>
      <View>
        <Text style={styles.Title}>Bouwjaar:</Text>
        <Text style={styles.Text}>2021</Text>
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  Text: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#77b7f7',
    padding: '5%',
    margin:'5%',
    marginTop:'2%',
    width: '70%',
  },
  Title: {
    alignItems: 'center',
    paddingLeft: '5%',
    paddingVertical: '1%',
    width: '70%',
  },
});
