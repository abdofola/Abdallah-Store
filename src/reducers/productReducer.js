export const productReducer = (filterGrouped, product) => {
    const filter = product.cat_id;
    if (filterGrouped[filter] == null) filterGrouped[filter] = [];
    filterGrouped[filter].push(product);
  
    return filterGrouped;
  };