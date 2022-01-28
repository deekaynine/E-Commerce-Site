import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

import { updateCollections } from "../../redux/shop/shopActions";

import withSpinner from "../../components/withSpinner/withSpinner.jsx";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionpageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    //getting shop data using observer/sub pattern
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubsribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={
              <CollectionsOverviewWithSpinner isLoading={loading} props />
            }
          />
          <Route
            path="/:collectionId"
            element={<CollectionpageWithSpinner isLoading={loading} />}
          />
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
