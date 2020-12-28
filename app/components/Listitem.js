import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View ,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Listitem({name,isComplete,changeComplete,deleteItem}) {
  return (
    <View style={styles.listitmebox} >
      <View style={styles.makerow}>
      <TouchableOpacity onPress={changeComplete}> 
        <AntDesign name={isComplete? "checkcircle":"frowno"} size={20} style={styles.checkmargin}></AntDesign>
      </TouchableOpacity>
      
      <Text style={styles.item}>{name}</Text>
      </View>
      <TouchableOpacity onPress={deleteItem}> 
        <AntDesign name="close" size={20}></AntDesign>
      </TouchableOpacity>
    </View>
  );
};

const {width,height} = Dimensions.get('window') //기기의 가로 세로 길이를 설정해주는거임

const styles = StyleSheet.create({
  listitmebox : {
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 10,
    width: width-60, //기기의 가로 길이보다 40만큼 작게한다
    flexDirection: 'row', //
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
  },
  makerow: {
    flexDirection: 'row',
  },
  checkmargin: {
    marginRight: 10,
  },
});


