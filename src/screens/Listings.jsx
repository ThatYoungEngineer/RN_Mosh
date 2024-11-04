import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Screen from '../components/Screen';

const Listings = () => {
  const LISTINGS = [
    {
      id: 1,
      title: 'Amazing House',
      price: '$200,000',
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    },
    {
      id: 2,
      title: 'PS4 Pro',
      price: '$400',
      img: 'https://www.gamespot.com/a/uploads/original/1568/15683559/3153252-ps4pro-review-thumb.jpg',
    },
    {
      id: 3,
      title: 'HP Victus 15',
      price: '$600',
      img: 'https://m.media-amazon.com/images/I/71oAs8eJk-L.jpg',
    },
  ];
  return (
    <Screen>
      <View style={{padding: 20}}>
        <FlatList
          data={LISTINGS}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity>
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
          ItemSeparatorComponent={() => <View style={{marginTop: 15}} />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
  },
  textContainer: {
    padding: 15,
  },
});
export default Listings;
