import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useEffect, useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';
export default function AppImagePicker() {
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
    const selectedImages = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
    });
    setSelectedImages(selectedImages?.assets);
  };

  const handleImageDelete = item => () => {
    setSelectedImages(selectedImages.filter(img => img.uri != item.uri));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 0,
      }}>
      {selectedImages?.length > 0 && (
        <FlatList
          data={selectedImages}
          keyExtractor={item => String(item.fileName)}
          horizontal
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPressOut={handleImageDelete(item)}>
              <Image source={{uri: item.uri}} style={styles.selectedImage} />
            </TouchableWithoutFeedback>
          )}
        />
      )}
      <TouchableOpacity
        style={styles.cameraContainer}
        onPressOut={openImageLibrary}>
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
