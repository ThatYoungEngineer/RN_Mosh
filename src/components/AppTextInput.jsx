import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppTextInput = ({
  icon,
  password,
  placeholder,
  maxLength,
  multiline,
  ...others
}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={20} />}
      <TextInput
        clearButtonMode="always"
        secureTextEntry={password}
        placeholder={placeholder}
        placeholderTextColor="#0000005f"
        style={styles.input}
        multiline={multiline}
        maxLength={maxLength}
        {...others}
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
    borderRadius: 8,
    backgroundColor: '#ff433529',
    alignItems: 'center',
  },
  input: {
    width: '98%',
    height: 60,
    maxHeight: 150,
    paddingHorizontal: 16,
    fontSize: 17,
    color: '#000',
    fontWeight: 'semibold',
    textAlignVertical: 'center',
  },
});

export default AppTextInput;
