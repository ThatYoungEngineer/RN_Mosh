import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/Screen';
import AppImagePicker from '../components/AppImagePicker';
import Header from '../components/Header';
import {AppTextInput} from '../components';
import RNPickerSelect from 'react-native-picker-select';

export default function CreateListing() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const INPUT_FIELDS = [
    {id: 1, title: 'Title', placeholder: 'Title'},
    {
      id: 2,
      title: 'Price',
      placeholder: 'Price',
      keyboardType: 'numeric',
      maxLength: 6,
    },
    {id: 3, title: 'Category', placeholder: 'Category'},
    {
      id: 4,
      title: 'Description',
      placeholder: 'Description',
      multiline: true,
    },
  ];
  return (
    <Screen>
      <View>
        <Header title="Create Listing" icon="view-list" />
        <View style={{padding: 10}}>
          <AppImagePicker />
          <FlatList
            data={INPUT_FIELDS}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <AppTextInput
                placeholder={item.placeholder}
                keyboardType={item.keyboardType}
                maxLength={item.maxLength}
                multiline={item.multiline}
              />
            )}
            style={{marginTop: 15}}
            ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
          />
          <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  postBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#909000',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  postText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    fontFamily: 'System',
  },
});
