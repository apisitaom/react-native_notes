
import React, {Component} from 'react';
import { 
  StyleSheet,
   Text, 
   View,
   TouchableOpacity,
  } from 'react-native';

export default class Note extends React.Component {
  render() {
    return (

    <View key={this.props.keyval} style={styles.note}>
    
    <Text style={styles.noteText}>{this.props.val.date}</Text>
    <Text style={styles.noteText}>{this.props.val.note}</Text>

    <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
    <Text style={styles.noteDeleteText}>DEL</Text>
    </TouchableOpacity>
    </View>

    );
  }
}
const styles = StyleSheet.create({
 note:{
     position:'relative',
     padding:20,
     paddingRight:100,
     borderBottomWidth:2,
     borderBottomColor:'rgb(189,183,107)',
 },
noteText:{
    paddingLeft:20,
    borderBottomWidth:10,
    borderLeftColor:'rgb(124,252,0)',
},
noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(173,255,47)',
    padding:10,
    top:10,
    bottom:10,
    right:10,
},
noteDeleteText:{
    color:'white',
},

});


