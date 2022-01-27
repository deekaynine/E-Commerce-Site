import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

import { updateCollections } from "../../redux/shop/shopActions";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

class ShopPage extends React.Component {
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverview />} />
          <Route path="/:collectionId" element={<CollectionPage />} />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
