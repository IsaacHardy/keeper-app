import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './KeeperListItem.css';

function KeeperListItem(props) {
  return (
    <div className={styles['single-keeper']}>
      <h3 className={styles['keeper-title']}>
        <Link to={`/keepers/${props.keeper.cuid}`} >
          {props.keeper.round}
        </Link>
      </h3>
      <p className={styles['keeper-name']}><FormattedMessage id="by" /> {props.keeper.name}</p>
      <p className={styles['keeper-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteKeeper" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

KeeperListItem.propTypes = {
  keeper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    round: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default KeeperListItem;
