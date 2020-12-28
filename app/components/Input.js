import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

export default function Input({value,changeText,addTodoItem}) {
  return (
    <TextInput
        value={value}
        onChangeText={changeText}
        onEndEditing={addTodoItem}


        style={styles.input}
        placeholder={"할일을 입력해주세요"}
        maxLength={30}
        returnKeyType="done"/>

  );
};

const styles = StyleSheet.create({ //styles 상수안에 css를 붙여넣어주기.
      input: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  
});
