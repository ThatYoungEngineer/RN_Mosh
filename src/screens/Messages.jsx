import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useState} from 'react';
import Screen from '../components/Screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Messages = () => {
  const MESSAGES = [
    {
      id: 1,
      title: 'HazenLogix',
      message: 'Missed Attendance Notification.',
      userImage:
        'https://www.profilebakery.com/wp-content/uploads/2023/04/PROFILE-PICTURE-FOR-FACEBOOK.jpg',
    },
    {
      id: 2,
      title: 'Jazz 4G',
      message: 'Subscribe to Daily Offer now!',
      userImage:
        'https://www.profilebakery.com/wp-content/uploads/2023/04/women-AI-Profile-Picture.jpg',
    },
    {
      id: 3,
      title: 'Khizer Awais',
      message: 'Hello, how are you? Please share your task progress.',
      userImage:
        'https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg',
    },
  ];

  const [messages, setMessages] = useState(MESSAGES);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleDeleteMessage = item => {
    setMessages(prevMessages => prevMessages.filter(msg => msg.id !== item.id));
  };

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
          <Text style={styles.headerText}>Messages</Text>
          <Icon name="envelope" size={35} color="#6a6a6a" />
        </View>
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <GestureHandlerRootView style={{flex: 1}}>
            <Swipeable
              renderRightActions={() => (
                <View style={styles.rightActionsContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => handleDeleteMessage(item)}>
                    <Icon name="trash" size={32} color="#ff0000" />
                  </TouchableWithoutFeedback>
                </View>
              )}>
              <TouchableNativeFeedback>
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                  }}>
                  <Image
                    source={{uri: item.userImage}}
                    style={styles.userImage}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {item.title}
                    </Text>
                    <Text numberOfLines={1} style={{fontSize: 16}}>
                      {item.message}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </Swipeable>
          </GestureHandlerRootView>
        )}
        ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          setMessages([
            {
              id: 1,
              title: 'Khizer Awais',
              message: 'Messages has been refreshed!',
              userImage:
                'https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg',
            },
          ]);
          setIsRefreshing(false);
        }}
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
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  rightActionsContainer: {
    backgroundColor: '#f8110043',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default Messages;
