import React, { useEffect, lazy, Suspense } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import Spinner from "../../components/spinner/spinner";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer props />} />
          <Route
            path="/:collectionId"
            element={<CollectionPageContainer props />}
          />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
