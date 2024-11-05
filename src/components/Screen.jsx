import {StyleSheet, SafeAreaView} from 'react-native';

const Screen = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f8f8',
  },
});

export default Screen;
