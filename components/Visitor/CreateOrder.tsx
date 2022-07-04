import { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import RealmContext, { Order } from "../../context/RealmContext";
import 'react-native-get-random-values'
import { useApp } from "@realm/react";
import tailwind from "twrnc";

export default function CreateOrder() {
    const {useRealm } = RealmContext;
    const realm = useRealm()
    const app = useApp()

    const [bier, setBier] = useState(0)
    const [cola, setCola] = useState(0)
    const [baco, setBaco] = useState(0)
    
    const reset = useCallback((): void => {
        setBier(0)
        setCola(0)
        setBaco(0)
    }, [])
    
    const onPressHandler = useCallback((): void => {

        const products: Array<string> = []

        if (bier>0) products.push(`${bier} bier`) 
        if (cola>0) products.push(`${cola} cola`) 
        if (baco>0) products.push(`${baco} baco`) 

        realm.write(() => {
            realm.create('Order', Order.generate(products.join(', '), app.currentUser?.id));
            reset()
          })
    }, [realm, app.currentUser?.id, bier, cola, baco])

    return (
        <View>
            <View style={tailwind`flex-row justify-between mb-4`}>
                <TouchableOpacity onPress={() => { setBier(bier+1) }} style={tailwind`flex-1 items-center bg-green-${100*(bier+1)} justify-center mr-2`}>
                    <Text style={tailwind`text-xl font-bold`}>{bier}</Text>
                    <Text>Bier</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCola(cola+1) }} style={tailwind`flex-1 items-center bg-green-${100*(cola+1)} aspect-1 justify-center mr-2`}>
                    <Text style={tailwind`text-xl font-bold`}>{cola}</Text>
                    <Text>Cola</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setBaco(baco+1) }} style={tailwind`flex-1 items-center justify-center bg-green-${100*(baco+1)}`}>
                    <Text style={tailwind`text-xl font-bold`}>{baco}</Text>
                    <Text>Baco</Text>
                </TouchableOpacity>
            </View>

            {(bier+cola+baco > 0) && (
            <View style={tailwind`flex-row`}>
                <View style={tailwind`w-2/5`}></View>
                <View style={tailwind`w-2/5 pl-2`}>
                    <TouchableOpacity style={tailwind` p-2 bg-gray-200 items-center`} onPress={onPressHandler}>
                        <Text>Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={tailwind`w-1/5 pl-2`}>
                    <TouchableOpacity style={tailwind` p-2 bg-red-200 items-center`} onPress={reset}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )}
        </View>
        
    )
}
