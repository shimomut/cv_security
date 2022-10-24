/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Board } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import BoardComponent from "./BoardComponent";
import { Collection } from "@aws-amplify/ui-react";
export default function BoardComponentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Board,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "BoardComponentCollection")}
    >
      {(item, index) => (
        <BoardComponent
          board={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BoardComponent>
      )}
    </Collection>
  );
}
