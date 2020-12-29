import { SET_CUR_PAGE, SET_DRAWER_OPEN, SET_DRAWER_CLOSE, SET_FILTER_TOGGLE, SET_INVERTED_COLOR, SORT_FILTER_VALUE } from '../actionTypes';
export const setCurrentPage = (pageNum) => (dispatch) => {
  try {
    dispatch({
      type: SET_CUR_PAGE,
      payload: pageNum
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const setDrawerOpen = () => dispatch => {
  try {
    dispatch({
      type: SET_DRAWER_OPEN
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const setDrawerClose = () => dispatch => {
  try {
    dispatch({
      type: SET_DRAWER_CLOSE
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const setFilterToggle = () => dispatch => {
  try {
    dispatch({
      type: SET_FILTER_TOGGLE
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const setInvertedColor = (isInverted) => dispatch => {
  try {
    dispatch({
      type: SET_INVERTED_COLOR,
      payload: isInverted
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const setSortFilterValue = (sortValue) => dispatch => {
  try {
    dispatch({
      type: SORT_FILTER_VALUE,
      payload: sortValue
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};
