import React from 'react';
import axios from 'axios';


class Products extends React.Component {
  state = { products: [], displayForm: false }


  componentDidMount() {
    let products = this.state
    axios.get('/api/products')
    .then( response => this.setState({products: [products, ...response.data]}))
    .catch(console.log("Products didn't load"))
  }

  showProducts() {
    let { products } = this.state
    if(products.length){
    <ul>
      { products.map
        ( product =>
          <li key={product.id}>{product.name}</li>
        )
      }
    </ul>
    }else{
      return <li>There are no products to list</li>
    }
  }

  showForm() {

  }

  render(){
    let { displayForm } = this.state;
    return(
      <div>
        { displayForm ? this.showForm() : this.showProducts() }
      </div>
    )
  }
}

export default Products;
