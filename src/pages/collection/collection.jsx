import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import CollectionItem from "../../components/collection-item/collectionItem";

import { selectCollection } from "../../redux/shop/shopSelectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collectionStyles.jsx";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collectionObj = useSelector(selectCollection(collectionId));
  const { title, items } = collectionObj;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
