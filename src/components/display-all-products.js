
import DisplayProductTiles from "./display-product-tiles";
import React from "react";

class DisplayAllProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { allProductsData: [], searchText: "", filteredProducts: [] }
  }
  componentDidMount() {
    this.setState({ allProductsData: this.props.productsData })
    if (this.state.searchText === '')
      this.setState({ filteredProducts: this.props.productsData })
  }

  updateSearchText = (event) => {
    this.setState({ searchText: event.target.value })
    this.setState({ filteredProducts: this.filterProductData(event.target.value) })
  }

  filterProductData = (searchString) => {
    return this.state.allProductsData.filter((productData) => {
      return productData.title.toLowerCase().includes(searchString.toLowerCase());
    })
  }

  render() {

    const productDetailsData = (
      <div className="body product-listing-page App">
        <h1>Product Listing Page</h1>
        <div className="card-group">
          <input type={"text"} placeholder="Search Products..." className="search-field" value={this.state.searchText} onChange={this.updateSearchText} />
          <DisplayProductTiles allProductsData={this.state.filteredProducts} />
        </div>
      </div>)
    return (
      <>
        {productDetailsData}
      </>
    );
  }
}


export default DisplayAllProducts;
