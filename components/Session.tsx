import { useApp, useUser } from '@realm/react';
import { SafeAreaView, Button, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Session = ({}) => {

    const user = useUser()

    const logout = () => {
        if (user) user.logOut()        
    }

    return (
        <View style={tw`flex-row justify-between`}>
            <Text style={tw`px-4`}>{user?.profile.email}</Text>
            <TouchableOpacity style={tw`px-4`} onPress={logout}>
                <Text style={tw`text-blue-500`}>Log out</Text>
            </TouchableOpacity>
        </View>
    ) 
}

export default Session