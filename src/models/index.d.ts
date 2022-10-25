import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type PersonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GateEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPerson = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly age?: number | null;
  readonly tel?: string | null;
  readonly Boards?: (Board | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly age?: number | null;
  readonly tel?: string | null;
  readonly Boards: AsyncCollection<Board>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person, PersonMetaData>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person, PersonMetaData>) => MutableModel<Person, PersonMetaData> | void): Person;
}

type EagerBoard = {
  readonly id: string;
  readonly message: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly personID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoard = {
  readonly id: string;
  readonly message: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly personID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Board = LazyLoading extends LazyLoadingDisabled ? EagerBoard : LazyBoard

export declare const Board: (new (init: ModelInit<Board, BoardMetaData>) => Board) & {
  copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}

type EagerGateEvent = {
  readonly id: string;
  readonly timestamp: string;
  readonly camera_name: string;
  readonly image_url: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGateEvent = {
  readonly id: string;
  readonly timestamp: string;
  readonly camera_name: string;
  readonly image_url: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GateEvent = LazyLoading extends LazyLoadingDisabled ? EagerGateEvent : LazyGateEvent

export declare const GateEvent: (new (init: ModelInit<GateEvent, GateEventMetaData>) => GateEvent) & {
  copyOf(source: GateEvent, mutator: (draft: MutableModel<GateEvent, GateEventMetaData>) => MutableModel<GateEvent, GateEventMetaData> | void): GateEvent;
}