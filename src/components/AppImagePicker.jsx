import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useEffect, useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';

export default function AppImagePicker({onChangeText}) {
  const [selectedImages, setSelectedImages] = useState(null);

  const requestCameraRollPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
    await request(permission);
  };

  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  const openImageLibrary = async () => {
    const RESULT = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
    });
    if (RESULT?.assets && selectedImages != null) {
      setSelectedImages(prevImages => [...prevImages, ...RESULT.assets]);
      onChangeText(prevImages => [...prevImages, ...RESULT.assets]);
    } else if (RESULT?.assets) {
      setSelectedImages(RESULT.assets);
      onChangeText(RESULT.assets);
    }
  };

  const handleImageDelete = item => () => {
    console.log('hello');
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {selectedImages?.length > 0 && (
        <FlatList
          data={selectedImages}
          keyExtractor={item => String(item)}
          horizontal
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => handleImageDelete(item)}>
              <Image source={{uri: item.uri}} style={styles.selectedImage} />
            </TouchableWithoutFeedback>
          )}
          style={{flexGrow: 0}}
        />
      )}
      <TouchableOpacity
        style={styles.cameraContainer}
        onPress={openImageLibrary}>
        <Icon name="camera" size={30} color="#3a3a3a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    backgroundColor: '#ff433529',
    padding: 20,
    width: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
