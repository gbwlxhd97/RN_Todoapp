import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default function Subtitle({title}) { //props 로 title 할당
  return (
    <View>
      <Text style={styles.Subtitletext}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ //styles 상수안에 css를 붙여넣어주기.
  Subtitletext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f4e66',
  },
  
});