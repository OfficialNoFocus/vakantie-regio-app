import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';

export default class Page3 extends React.Component {
  state = {
    highScore: 0,
    generatedScore: null,
    retrievedScore: null,
  };

  generateScore = () => {
    let score = Math.round(Math.random() * 1000);
    this.setState({ generatedScore: score });
    if (score > this.state.highScore) this.setState({ highScore: score });
  };

  /* this function will store information */
  saveData = async () => {
    try {
      await AsyncStorage.setItem('highScore', '' + this.state.highScore);
    } catch (error) {
      console.log(error.message);
    }
  };

  /* this function will retrieve stored information */
  getData = async () => {
    try {
      let highScore = await AsyncStorage.getItem('highScore');
      this.setState({ retrievedScore: highScore });
      if (highScore > this.state.highScore) this.setState({ highScore });
      else
        console.log(
          'The stored score is too low, ' +
            highScore +
            ' vs ' +
            this.state.highScore
        );
    } catch (error) {
      console.log(error.message);
    }
  };

  /* this function will delete stored information */
  clearData = async () => {
    try {
      await AsyncStorage.removeItem('highScore');
    } catch (error) {
      console.log(error.message);
    }
  };

  clearTempData = () => {
    this.setState({ highScore: 0 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Page 3 - can store and retrieve permanent data
        </Text>
        <Text>Current highScore: {this.state.highScore}</Text>
        <TouchableOpacity onPress={this.generateScore} style={styles.button}>
          <Text style={styles.buttonText}>
            Generate a new score. Last generated score:{' '}
            {this.state.generatedScore}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.saveData} style={styles.button}>
          <Text style={styles.buttonText}>Save the current high score</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getData} style={styles.button}>
          <Text style={styles.buttonText}>
            Get the stored high score. Last retrieved score:{' '}
            {this.state.retrievedScore}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clearTempData} style={styles.button}>
          <Text style={styles.buttonText}>Clear temp scores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clearData} style={styles.button}>
          <Text style={styles.buttonText}>Clear stored score</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(1)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Go to page 1 - simple page with just buttons to go to other pages.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(2)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Go to page 2 - a page that can send or receive data.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.buttonPress(4)}
          style={styles.button}>
          <Text style={[styles.buttonText, {backgroundColor: "yellow"}]}>
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
