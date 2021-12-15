// import * as React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import Stuff from '../Stuff';

// export default class Page4 extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Page 4 - reading data from stuff.data</Text>
//         <Text style={{ fontSize: 28 }}>{Stuff.awesomeMovie}</Text>
//         <Text style={{ fontSize: 20 }}>Awesome cast:</Text>
//         <ScrollView style={{ flex: 1 }}>
//           {Object.keys(Stuff.awesomeCast).map((character, index) => {
//             return (
//               <Text key={index}>
//                 {character} : {Stuff.awesomeCast[character]}
//               </Text>
//             );
//           })}
//         </ScrollView>
//         <Text style={{ fontSize: 20 }}>Awesome things:</Text>
//         <ScrollView style={{ flex: 1 }}>
//           {Stuff.awesomeThings.map((thing, index) => {
//             return (
//               <Text key={index}>
//                 {thing}
//               </Text>
//             );
//           })}
//         </ScrollView>
//         <TouchableOpacity
//           onPress={() => this.props.buttonPress(1)}
//           style={styles.button}>
//           <Text style={styles.buttonText}>
//             Go to page 1 - simple page with just buttons to go to other pages.
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => this.props.buttonPress(2)}
//           style={styles.button}>
//           <Text style={styles.buttonText}>
//             Go to page 2 - a page that can send or receive data.
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => this.props.buttonPress(3)}
//           style={styles.button}>
//           <Text style={styles.buttonText}>
//             Go to page 3 - permanent data storage and retrieval
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     margin: 10,
//     backgroundColor: 'blue',
//     borderRadius: 10,
//     paddingBottom: 5,
//   },
//   buttonText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'white',
//   },
// });
