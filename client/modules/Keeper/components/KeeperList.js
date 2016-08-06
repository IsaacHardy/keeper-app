import React, { PropTypes } from 'react';

// Import Components
import KeeperListItem from './KeeperListItem/KeeperListItem';

function KeeperList(props) {
  return (
    <div className="listView">
      {
        props.keepers.map(keeper => (
          <KeeperListItem
            keeper={keeper}
            key={keeper.cuid}
            onDelete={() => props.handleDeleteKeeper(keeper.cuid)}
          />
        ))
      }
    </div>
  );
}

KeeperList.propTypes = {
  keepers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    round: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteKeeper: PropTypes.func.isRequired,
};

export default KeeperList;
