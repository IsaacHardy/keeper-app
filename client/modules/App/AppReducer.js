// Import Actions
import { TOGGLE_ADD_KEEPER } from './AppActions';

// Initial State
const initialState = {
  showAddKeeper: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_KEEPER:
      return {
        showAddKeeper: !state.showAddKeeper,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddKeeper
export const getShowAddKeeper = state => state.app.showAddKeeper;

// Export Reducer
export default AppReducer;
