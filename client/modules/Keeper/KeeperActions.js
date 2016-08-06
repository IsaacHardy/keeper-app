import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_KEEPER = 'ADD_KEEPER';
export const ADD_KEEPERS = 'ADD_KEEPERS';
export const DELETE_KEEPER = 'DELETE_KEEPER';

// Export Actions
export function addKeeper(keeper) {
  return {
    type: ADD_KEEPER,
    keeper,
  };
}

export function addKeeperRequest(keeper) {
  return (dispatch) => {
    return callApi('keepers', 'post', {
      keeper: {
        name: keeper.name,
        round: keeper.round,
      },
    }).then(res => dispatch(addKeeper(res.keeper)));
  };
}

export function addKeepers(keepers) {
  return {
    type: ADD_KEEPERS,
    keepers,
  };
}

export function fetchKeepers() {
  return (dispatch) => {
    return callApi('keepers').then(res => {
      dispatch(addKeepers(res.keepers));
    });
  };
}

export function fetchKeeper(cuid) {
  return (dispatch) => {
    return callApi(`keepers/${cuid}`).then(res => dispatch(addKeeper(res.keeper)));
  };
}

export function deleteKeeper(cuid) {
  return {
    type: DELETE_KEEPER,
    cuid,
  };
}

export function deleteKeeperRequest(cuid) {
  return (dispatch) => {
    return callApi(`keepers/${cuid}`, 'delete').then(() => dispatch(deleteKeeper(cuid)));
  };
}
