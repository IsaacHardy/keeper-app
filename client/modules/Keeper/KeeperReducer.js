import { ADD_KEEPER, ADD_KEEPERS, DELETE_KEEPER } from './KeeperActions';

// Initial State
const initialState = { data: [] };

const KeeperReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEEPER :
      return {
        data: [action.keeper, ...state.data],
      };

    case ADD_KEEPERS :
      return {
        data: action.keepers,
      };

    case DELETE_KEEPER :
      return {
        data: state.data.filter(keeper => keeper.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all keepers
export const getKeepers = state => state.keepers.data;

// Get keeper by cuid
export const getKeeper = (state, cuid) => state.keepers.data.filter(keeper => keeper.cuid === cuid)[0];

// Export Reducer
export default KeeperReducer;
