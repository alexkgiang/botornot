import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/config';
import { collection } from 'firebase/firestore';

function SingleGame() {
  const messageCollection = collection(db, 'messages');
  // const query = messageCollection.orderBy('createdAt').limit(25);

  // const [messages] = useCollectionData(query, {idField: 'id'});


  return (
    <SafeAreaView>
      <Text>Game</Text>
      <View>
        {/* {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} */}
      </View>
    </SafeAreaView>
  );

}

function ChatMessage(props) {
    const { text, uid } = props.message;

    return (
      <Text>{text}</Text>
    )
}

export default SingleGame;