import RealmContext, { Order} from "../context/RealmContext";
import { View, FlatList, Text } from "react-native"
import tw from 'twrnc';
import OrderStatusButton from "./OrderStatusButton";

const PointOfSaleOrderOverview = () => {

    const { useQuery } = RealmContext;

    const orders = useQuery(Order).filtered('pickedUp == null')

    return (
        <View style={tw`p-4`}>
          <Text style={tw`text-xl font-bold`}>Open orders</Text>
          <FlatList
            data={orders}
            keyExtractor={order => order._id.toString()}
            renderItem={({item}) => (
              <View style={tw`flex-row pb-2`}>
                  <Text style={tw`w-3/5`}>{item.description}</Text>
                  <View style={tw`w-2/5`}>
                    <OrderStatusButton item={item} />
                  </View>
              </View>
            )}
          />
        </View>
      );
}

export default PointOfSaleOrderOverview