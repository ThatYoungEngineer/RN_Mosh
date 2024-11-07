import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import React from 'react';

import Screen from '../components/Screen';
import Header from '../components/Header';
import AppImagePicker from '../components/AppImagePicker';
import AppTextInput from '../components/AppTextInput';
import ErrorText from '../components/ErrorText';

import {Formik} from 'formik';
import * as yup from 'yup';

const VALIDATION_SCHEMA = yup.object().shape({
  images: yup
    .array()
    .min(1, 'Minimum 1 image is required') // Use a number (1) for the minimum length
    .required('Images are required'),
  title: yup.string().required('Title is required'),
  price: yup
    .number()
    .typeError('Should be a number!')
    .required('Price is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
});

export default function CreateListing() {
  const INPUT_FIELDS = [
    {id: 1, name: 'title', placeholder: 'Title'},
    {
      id: 2,
      name: 'price',
      placeholder: 'Price',
      keyboardType: 'numeric',
      maxLength: 6,
    },
    {id: 3, name: 'category', placeholder: 'Category'},
    {id: 4, name: 'description', placeholder: 'Description', multiline: true},
  ];
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <Header title="Create Listing" icon="view-list" />
        <Formik
          initialValues={{
            images: null,
            title: '',
            price: '',
            category: '',
            description: '',
          }}
          onSubmit={data => {
            console.log('Submitting: ', data);
          }}
          validationSchema={VALIDATION_SCHEMA}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            errors,
            touched,
            isValid,
            isSubmitting,
            dirty,
            values,
          }) => (
            <>
              <View style={{marginBottom: 10}}>
                <AppImagePicker
                  onChangeText={images => setFieldValue('images', images)}
                />
                {errors.images && touched.images && (
                  <ErrorText message={errors.images} />
                )}
              </View>
              <FlatList
                data={INPUT_FIELDS}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <>
                    <AppTextInput
                      placeholder={item.placeholder}
                      keyboardType={item.keyboardType}
                      maxLength={item.maxLength}
                      multiline={item.multiline}
                      value={values[item.name]}
                      onBlur={handleBlur(item.name)}
                      onChangeText={handleChange(item.name)} // bind Formik handleChange
                    />

                    {errors[item.name] && touched[item.name] && (
                      <ErrorText message={errors[item.name]} />
                    )}
                  </>
                )}
                style={styles.inputList}
                ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
                scrollEnabled={false}
              />
              <TouchableOpacity
                style={[
                  styles.postBtn,
                  (isSubmitting || !isValid || !dirty) &&
                    styles.postBtnDisabled,
                ]}
                onPress={handleSubmit}>
                <Text style={styles.postText}>Post</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
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
  postBtnDisabled: {
    opacity: 0.4,
  },
});
