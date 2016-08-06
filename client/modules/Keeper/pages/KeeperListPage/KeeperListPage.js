import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import KeeperList from '../../components/KeeperList';
import KeeperCreateWidget from '../../components/KeeperCreateWidget/KeeperCreateWidget';

// Import Actions
import { addKeeperRequest, fetchKeepers, deleteKeeperRequest } from '../../KeeperActions';
import { toggleAddKeeper } from '../../../App/AppActions';

// Import Selectors
import { getShowAddKeeper } from '../../../App/AppReducer';
import { getKeepers } from '../../KeeperReducer';

class KeeperListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchKeepers());
  }

  handleDeleteKeeper = keeper => {
    if (confirm('Do you want to delete this keeper')) { // eslint-disable-line
      this.props.dispatch(deleteKeeperRequest(keeper));
    }
  };

  handleAddKeeper = (name, round) => {
    this.props.dispatch(toggleAddKeeper());
    this.props.dispatch(addKeeperRequest({ name, round }));
  };

  render() {
    return (
      <div>
        <KeeperCreateWidget addKeeper={this.handleAddKeeper} showAddKeeper={this.props.showAddKeeper} />
        <KeeperList handleDeleteKeeper={this.handleDeleteKeeper} keepers={this.props.keepers} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
KeeperListPage.need = [() => { return fetchKeepers(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddKeeper: getShowAddKeeper(state),
    keepers: getKeepers(state),
  };
}

KeeperListPage.propTypes = {
  keepers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    round: PropTypes.string.isRequired,
  })).isRequired,
  showAddKeeper: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

KeeperListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(KeeperListPage);
