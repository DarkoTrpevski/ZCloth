import { SET_CUR_PAGE, SET_DRAWER_OPEN, SET_DRAWER_CLOSE, SET_FILTER_TOGGLE, SET_INVERTED_COLOR, SORT_FILTER_VALUE } from '../actionTypes';

const initialState = {
  curPage: 1,
  isDrawerOpen: false,
  isFilterOpen: false,
  isInverted: true,
  sortFilterValue: 'relevance'
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CUR_PAGE:
      return {
        ...state,
        curPage: payload
      }
    case SET_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: true
      }
    case SET_DRAWER_CLOSE:
      return {
        ...state,
        isDrawerOpen: false
      }
    case SET_FILTER_TOGGLE:
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen
      }
    case SET_INVERTED_COLOR:
      return {
        ...state,
        isInverted: payload
      }
    case SORT_FILTER_VALUE:
      return {
        ...state,
        sortFilterValue: payload
      }
    default:
      return state;
  }
}

export default userReducer;