import React from "react";
import SingleProductComponent from "./SingleProductComponent";
import ListViewSingleProductComponent from "./ListViewSingleProductComponent";

function AllProducts(props) {
  console.log(props, "propss");
  const views = props.views;
  const view = props.view;
  return (view === views.grid ?
    <SingleProductComponent
      category={props.category}
      tags={props.tags}
      type={props.type == "" ? "NoParam" : props.type}
      brands={props.brands}
      priceRange={props.priceRange}
      sortBy={props.sortBy}
      page={props.page}
      per_page={props.per_page}
      setPaginationData={props.setPaginationData}
      paginationData={props.paginationData}
    />
    :
    <ListViewSingleProductComponent
      category={props.category}
      tags={props.tags}
      type={props.type == "" ? "NoParam" : props.type}
      brands={props.brands}
      priceRange={props.priceRange}
      sortBy={props.sortBy}
      page={props.page}
      per_page={props.per_page}
      setPaginationData={props.setPaginationData}
      paginationData={props.paginationData}
    />
  );
}

export default AllProducts;
