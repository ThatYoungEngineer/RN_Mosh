import {StyleSheet, SafeAreaView} from 'react-native';

const Screen = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f8f8',
    justifyContent: 'flex-start',
    marginBottom: 60,
    flex: 1
  },
});

export default Screen;
