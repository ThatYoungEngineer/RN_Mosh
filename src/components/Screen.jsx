import {StyleSheet, SafeAreaView} from 'react-native';

const Screen = ({children, marginBottom=60}) => {
  return <SafeAreaView style={[styles.container, {marginBottom}]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f4f8f8',
  },
});

export default Screen;
