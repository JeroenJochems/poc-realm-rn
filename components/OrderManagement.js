
import { useUser } from "@realm/react";
import PointOfSaleOrderOverview from "./PointOfSaleOrderOverview";
import VisitorOrderOverview from "./Visitor/VisitorOrderOverview";

export default OrderManagement = (() => {

    const user = useUser()
  
    if (user && user.id==='62babea7438539ea5748d4b5') {
        return (<PointOfSaleOrderOverview />)
    }

    return (<VisitorOrderOverview />)
})