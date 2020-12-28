import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>MyTodoApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({ //styles 상수안에 css를 붙여넣어주기.
  headercontainer: { //객체 생성
    marginTop: 50,
    marginBottom: 50,
  },
  headertext: { //텍스트 객체 생성
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3f4e66',
  },
});
