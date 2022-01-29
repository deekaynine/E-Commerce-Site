//containers usually just pass down props rather than rendering
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";
import withSpinner from "../withSpinner/withSpinner";
import collectionsOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//compose make its easier to read/easy to read curried functions
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
