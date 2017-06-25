import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import ProductForm from './ProductForm';

class Products extends React.Component {
  state = { products: [], displayForm: false }


  componentDidMount() {
    axios.get('/api/products')
    .then( response => {
      this.setState({products: response.data })
      }
    )
  }

  submit = (product) => {
    let { products } = this.state;
    debugger
    axios.post('/api/products', { product })
    .then( response => {
      this.setState({ products: [response.data, ...products],
      displayForm : false
      })
    })
  }

  showProducts() {
    let { products } = this.state
    return (
      <ul>
        { products.map( product => <li key={product.id}>{product.name}</li> ) }
      </ul>
    )
  }

  showForm() {
    return <ProductForm submit={this.submit} />
  }



  toggleForm = () => {
    this.setState( state => {
      return { displayForm: !state.displayForm }
    })

  }

  render(){
    let { displayForm } = this.state;
    return(
      <div>
        <Button basic color='olive' onClick={this.toggleForm}>
          { displayForm ? 'Hide' : 'Show'} Form
        </Button>
        { displayForm ? this.showForm() : this.showProducts() }
      </div>
    )
  }
}

export default Products;
