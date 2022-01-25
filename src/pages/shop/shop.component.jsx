import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default ShopPage;
