import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Screen from '../components/Screen';
import Header from '../components/Header';
import ItemsSeparator from '../components/ItemsSeparator';
import userImage from '../assets/user.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
 const navigation = useNavigation()

  const menu = [
    {
      id: 1,
      title: 'Listings',
      logo: 'format-list-bulleted',
      logoBg: '#ff4135',
    },
    {
      id: 2,
      title: 'Messages',
      logo: 'message',
      logoBg: '#44bd5a',
    },
  ];

  return (
    <Screen>
      {/* <StatusBar backgroundColor="#6a51ae" barStyle="dark-content" translucent={false} /> */}
      <Header title="Account" icon="account" />
      <View style={styles.itemsContainer}>
            <Image source={userImage} style={styles.userImg} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>johndoe@gmail.com</Text>
            </View>
          </View>
          <FlatList
            style={{marginTop: 15}}
            data={menu}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate(item.title)}
              >
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
              </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: '500',
  },
  userEmail: {
    fontSize: 14,
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
