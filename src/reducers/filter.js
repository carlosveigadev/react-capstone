import { CHANGE_FILTER } from '../actions/actions';
import { passCategory } from '../api-requests/request';

const filterReducer = (state = passCategory(), action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
