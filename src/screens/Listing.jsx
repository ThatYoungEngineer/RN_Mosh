import { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Listings = () => {

  const [listing, setListing] = useState(null)

  const fetchListing = async () => {
    const res = await fetch("http://192.168.10.221:3000/listing")
    const data = await res.json() 
    setListing(data)
  }

  useEffect(() => {
    fetchListing()
		SystemNavigationBar.setNavigationColor('white');
  }, []);

  return (
    <Screen>
      <FlatList
        data={listing}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={<Header title="Products" icon="store" />}
        renderItem={({item}) => (
          <TouchableOpacity style={{padding: 15}}>
            <View style={styles.listingsContainer}>
              <Image style={styles.image} source={{uri: item.img}} />
              <View style={styles.textContainer}>
                <Text style={{fontWeight: 500, color: '#000'}}>
                  {item.title}
                </Text>
                <Text style={{fontWeight: 400, color: '#0fb728'}}>
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{marginTop: 0}} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  listingsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
  },
});
export default Listings;
