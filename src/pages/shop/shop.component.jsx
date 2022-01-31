import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer props />} />
          <Route
            path="/:collectionId"
            element={<CollectionPageContainer props />}
          />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
