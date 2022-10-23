// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Person, Board, GateEvent } = initSchema(schema);

export {
  Person,
  Board,
  GateEvent
};