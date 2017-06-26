import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { Redirect } from 'react-router-dom';

class Product extends React.Component{
  state = { product: {}, edit: false }

  componentDidMount(){
    axios.get(`/api/products/${this.props.match.params.id}`)
    .then( response => this.setState({product: response.data }))
  }

  submit = (product) => {
    let { match: { params: { id }}} = this.props;
    axios.put(`/api/products/${id}`, { product })
      .then( res => {
        this.setState({ product: res.data, edit: false })
      })
  }

  showProduct() {
    let { product } = this.state
    return (
      <div>
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
        <h2>{product.description}</h2>
      </div>
    )
  }

  showForm() {
    return <ProductForm submit={this.submit} { ...this.state.product }/>
  }

  toggleForm = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  destroy = () => {
    let { product } = this.state
    axios.delete(`/api/products/${product.id}`)
    .then( () => {
      return(
        <Redirect to='/products' />)
      }
    )
  }

  render(){
    let { edit } = this.state
    return(
      <div>
        { edit ? this.showForm() : this.showProduct() }
        <Button basic color='olive' onClick={this.toggleForm}>
          { edit ? 'Cancel' : 'Edit'}
        </Button>
        <Button basic color='olive' onClick={this.destroy}>Delete
        </Button>
      </div>
    )
  }

}

export default Product;
