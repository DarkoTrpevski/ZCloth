export const selectShopCollectionTypes = (productList, collectionUrlTypeParam) => {
  let filteredList;
  (collectionUrlTypeParam === "woman" || collectionUrlTypeParam === "man")
  ? filteredList = productList.filter((product) => product.gender === collectionUrlTypeParam)
  : filteredList = productList.filter((productType) => productType.category === collectionUrlTypeParam)
  // console.log('Inside selectShopCollectionTypes:', filteredList);
  return filteredList;
}