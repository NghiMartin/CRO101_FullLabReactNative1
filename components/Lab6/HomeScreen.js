import { Button, TextInput, TouchableOpacity,Text, View } from 'react-native';
import {useState} from 'react';

function HomeScreen({navigation}) {
    const [enteredUser, setEnteredUser] = useState();
    function handleDetails() {
        navigation.navigate('Details', {
            user: enteredUser,
            id: Math.random() * 100,
        });
    }
    return (
        <View>
            <Text>Màn hình chính</Text>
            <TextInput  placeholder='Enter your name' onChangeText={setEnteredUser} ></TextInput>
            <Button onPress={handleDetails} title='Đi tới màn hình chi tiết'></Button>
        </View>
    );
}

export default HomeScreen;