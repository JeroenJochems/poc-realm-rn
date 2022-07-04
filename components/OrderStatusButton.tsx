import { Text, TouchableOpacity} from "react-native";
import { Object } from "realm";
import tw from "twrnc";
import RealmContext, { Order } from "../context/RealmContext";

type OrderStatusButtonProps = {
    item: Order & Object
}

export default function OrderStatusButton(props: OrderStatusButtonProps) {

    const { useRealm, } = RealmContext;
    const realm = useRealm()

    const accept = (order: any) => {
        realm.write(() => {
            order.accepted = new Date
        }) 
    }

    const setReady = (order: any) => {
        realm.write(() => {
            order.ready = new Date()
        }) 
    }

    const setPickedUp = (order: any) => {
        realm.write(() => {
            order.pickedUp = new Date()
        }) 
    }

    if (props.item.ready) {
        return (
            <TouchableOpacity onPress={() => { setPickedUp(props.item) }} style={tw`bg-green-500 p-2 items-center`}>
                <Text>Picked up</Text>
            </TouchableOpacity>
        )
    }

    if (props.item.accepted) {
        return (
            <TouchableOpacity onPress={() => { setReady(props.item) }} style={tw`bg-green-200 p-2 items-center`}>
                <Text>Ready</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={() => { accept(props.item) }} style={tw`bg-yellow-200 p-2 items-center`}>
            <Text>Claim</Text>
        </TouchableOpacity>
    )    
}