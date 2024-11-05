import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppTextInput = ({icon, password, placeholder, ...others}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={20} />}
      <TextInput
        clearButtonMode="always"
        secureTextEntry={password}
        placeholder={placeholder}
        style={styles.input}
        {...others}
        numberOfLines={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
  },
});

export default AppTextInput;
