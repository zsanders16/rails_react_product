import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class ProductForm extends React.Component{
  defaultValues = { name: '', price: '', description: ''}

  state = { ...this.defaultValues }

  componentDidMount() {
    if(this.props.id){
      this.setState({...this.props})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let product = { ...this.state }
    debugger;
    this.props.submit(product)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render(){
    let { name, price, description,  } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Product Name</label>
          <input id="name" placeholder='Product Name' value={name} onChange={this.handleChange} required />
        </Form.Field>
        <Form.Field>
          <label>Product Price</label>
          <input id="price" placeholder='Product Price' value={price} onChange={this.handleChange} required />
        </Form.Field>
        <Form.Field>
          <label>Product Description</label>
          <input id="description" placeholder='Product Description' value={description} onChange={this.handleChange} required />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }


}

export default ProductForm
