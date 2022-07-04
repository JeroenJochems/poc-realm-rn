import {Realm, createRealmContext } from '@realm/react';
import 'react-native-get-random-values'

export class Order extends Realm.Object {

    _id!: Realm.BSON.ObjectId
    description!: string
    ownerId!: string
    createdAt!: Date
    accepted!: Date
    ready!: Date
    pickedUp!: Date

    static generate(description: string, userId: any) {
      return {
        _id: new Realm.BSON.ObjectId(),
        ownerId: userId,
        description,
        accepted: null,
        ready: null,
        pickedUp: null,
        createdAt: new Date(),
      };
    }

    static schema = {
      name: 'Order',
      primaryKey: '_id',
      properties: {
        _id: 'objectId',
        ownerId: 'string',
        description: 'string',
        accepted: 'date?',
        ready: 'date?',
        pickedUp: 'date?',
        createdAt: 'date',
      },
    };
  }

  export default createRealmContext({
    schema: [Order],
    schemaVersion: 8,
  });