import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';

const Screen = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const {height: screenHeight} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f8f8',
    justifyContent: 'flex-start',
  },
});

export default Screen;
