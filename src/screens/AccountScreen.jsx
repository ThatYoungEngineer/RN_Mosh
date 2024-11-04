import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Screen from '../components/Screen';
import userImage from '../assets/user.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ItemsSeparator from '../components/ItemsSeparator';

const AccountScreen = () => {
  const user = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      img: userImage,
    },
  ];

  const menu = [
    {
      id: 1,
      title: 'My Listings',
      logo: 'format-list-bulleted',
      logoBg: '#ff4135',
    },
    {
      id: 2,
      title: 'My Messages',
      logo: 'message',
      logoBg: '#44bd5a',
    },
  ];

  return (
    <Screen>
      <View
        style={{
          backgroundColor: '#f8f8f8',
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.headerText}>Account</Text>
          <Entypo name="user" size={35} color="#6a6a6a" />
        </View>
      </View>
      <FlatList
        data={user}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.itemsContainer}>
            <Image source={item.img} style={styles.userImg} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
          </View>
        )}
      />
      <FlatList
        style={{marginTop: 15}}
        data={menu}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.itemsContainer}>
            <View style={[styles.logo, {backgroundColor: item.logoBg}]}>
              <Icon
                name={item.logo}
                size={20}
                color="white"
                style={{height: 20, width: 20}}
              />
            </View>
            <Text style={{fontWeight: 500}}>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={ItemsSeparator}
      />
      <TouchableOpacity style={styles.logoutBtn}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.logo, {backgroundColor: '#d8cd2a'}]}>
            <Entypo
              name="log-out"
              size={20}
              color="white"
              style={{height: 20, width: 20}}
            />
          </View>
          <Text style={{fontWeight: 500}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
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
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemsContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userEmail: {
    fontSize: 12,
    fontWeight: '300',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtn: {
    marginTop: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
});

export default AccountScreen;
