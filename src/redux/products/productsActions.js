import { SORT_PRODUCTS, SHOW_DETAILS } from './productTypes';

export const sortProducts = (filterName) => (dispatch) => {
  try {
    dispatch({
      type: SORT_PRODUCTS,
      payload: filterName
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
}

export const showDetails = (id) => (dispatch) => {
  try {
    console.log('Inside productAction showDetails, id is:', id);
    dispatch({
      type: SHOW_DETAILS,
      payload: id
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};