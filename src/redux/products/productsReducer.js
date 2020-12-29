import { productList } from '../../assets/data';
import { SORT_PRODUCTS, SHOW_DETAILS } from './productTypes';


const initialState = {
  productList: productList,
  detailProduct: null
};

//***PRODUCT REDUCER UTILITY FUNCTIONS***//

const showDetails = (id) => {
  console.log('Inside productReducer showDetails, id is:', id);
  // const detailProduct = getItem(id);
  let detailProduct =  productList.find(item => item.id === id);
  console.log('Inside productReducer showDetails, detailProduct is:', detailProduct);
  return detailProduct;
};

const sortProducts = (productList, filterName) => {
  const sortedProductsList = [...productList];
  if(filterName === "relevance") {
    sortedProductsList.sort((a, b) => {
      return a.id - b.id;
    });
  }
  if(filterName === "ascending") {
    sortedProductsList.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if(filterName === "descending") {
    sortedProductsList.sort((a, b) => {
      return b.price - a.price;
    });
  }
  return sortedProductsList;
}

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    
    case SORT_PRODUCTS:
      return {
        ...state,
        productList: sortProducts(state.productList, payload)
      }
    case SHOW_DETAILS:
      return {
        ...state,
        detailProduct: showDetails(payload)
      }

    default:
      return state;
  }
}

export default productReducer;