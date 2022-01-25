import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shopSelectors";

import "./collection.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collectionObj = useSelector(selectCollection(collectionId));

  console.log(collectionId);
  console.log(collectionObj);
  const { title, items } = collectionObj;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
