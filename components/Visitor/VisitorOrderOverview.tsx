import RealmContext, { Order} from "../../context/RealmContext";
import { View, FlatList, Text } from "react-native"
import tw from 'twrnc';
import { useUser } from "@realm/react";
import CreateOrder from "./CreateOrder";
import OrderStatusButton from "./OrderStatus";


const VisitorOrderOverview = () => {

    const { useQuery } = RealmContext;
    const user = useUser()

    const orders = useQuery(Order).filtered('pickedUp == null').sorted('createdAt', true)

    return (
        <View style={tw`p-4`}>
          { user?.id!=='62babea7438539ea5748d4b5' && <CreateOrder /> }
          <Text style={tw`text-xl pb-2 pt-6 font-bold`}>My orders</Text>
          <FlatList
            data={orders}
            keyExtractor={order => order._id.toString()}
            renderItem={({item}) => (
              <View style={tw`flex-row pb-2`}>
                  <Text style={tw`w-2/3`}>{item.description}</Text>
                  <View style={tw`w-1/3`}>
                    <OrderStatusButton item={item} />
                  </View>
              </View>
            )}
          />
        </View>
      );
}

export default VisitorOrderOverview