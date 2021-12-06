import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

/*          
<Page1
buttonPress={buttonNum => this.buttonPress(buttonNum)}
dataSentToPage1={this.state.someDataToSendToPage1}
dataSentBack={(data) => this.dataSentBack(1, data)}
/>
*/

export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Page 2 - can send data back and forth</Text>
        <Text>Data sent to this page: {this.props.dataSentToPage}</Text>
        <TouchableOpacity
          onPress={() => this.props.dataSentBack('Page2 data')}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Send "Page2 data" back to the App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(1)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Go to page 1 - simple page with just buttons to go to other pages.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(3)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Go to page 3 - permanent data storage and retrieval
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(4)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Go to page 4 - Loading information from a data file.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    margin: 10,
    paddingBottom: 5,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
