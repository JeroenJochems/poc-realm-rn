import { Text, View } from "react-native";
import { Object } from "realm";
import tw from "twrnc";
import { Order } from "../../context/RealmContext";

type OrderStatusButtonProps = {
    item: Order & Object
}

export default function OrderStatusButton(props: OrderStatusButtonProps) {

    if (props.item.ready) {
        return (
            <View style={tw`bg-green-500 p-2 items-center`}>
                <Text>Klaar!</Text>
            </View>
        )
    }

    if (props.item.accepted) {
        return (
            <View style={tw`bg-green-200 p-2 items-center`}>
                <Text>In de maak</Text>
            </View>
        )
    }

    return (
        <View style={tw`bg-yellow-200 p-2 items-center`}>
            <Text>Wacht op bar</Text>
        </View>
    )    
}