const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export {
  CHANGE_FILTER, changeFilter,
};
