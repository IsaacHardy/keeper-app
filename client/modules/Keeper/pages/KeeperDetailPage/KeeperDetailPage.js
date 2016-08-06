import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/KeeperListItem/KeeperListItem.css';

// Import Actions
import { fetchKeeper } from '../../KeeperActions';

// Import Selectors
import { getKeeper } from '../../KeeperReducer';

export function KeeperDetailPage(props) {
  return (
    <div>
      <Helmet title={props.keeper.round} />
      <div className={`${styles['single-keeper']} ${styles['keeper-detail']}`}>
        <h3 className={styles['keeper-round']}>{props.keeper.round}</h3>
        <p className={styles['keeper-name']}><FormattedMessage id="by" /> {props.keeper.name}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
KeeperDetailPage.need = [params => {
  return fetchKeeper(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    keeper: getKeeper(state, props.params.cuid),
  };
}

KeeperDetailPage.propTypes = {
  keeper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    round: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(KeeperDetailPage);
