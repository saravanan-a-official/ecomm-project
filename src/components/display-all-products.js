
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
      <div className="items-center mx-40">
        <div className="App">
          <input
            type="text"
            name="price"
            id="price"
            value={this.state.searchText}
            onChange={(event) => this.updateSearchText(event)}
            className="justify-items-center rounded-md border-gray-300 my-3 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            placeholder="Search products..."
          />
        </div>
        <DisplayProductTiles allProductsData={this.state.filteredProducts} />

      </div>)
    return (
      <>
        {productDetailsData}
      </>
    );
  }
}


export default DisplayAllProducts;
