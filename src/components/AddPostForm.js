import React, { Component } from 'react';

export class AddPostForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      data: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    const name = this.state.name
    const data = this.state.data

    this.props.onSubmit({
      name,
      data
    })
  }
  onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({name}))
  }
  onDataChange = (e) => {
    const data = e.target.value
    this.setState(() => ({data}))
  }
    render(){
      return (
        <div>
          <p>{this.state.name}, {this.state.data}</p>
          <form onSubmit={this.onSubmit}>
            <input onChange={this.onNameChange} value={this.state.name} placeholder="name" type="text"/>
            <input onChange={this.onDataChange} value={this.state.data} placeholder="data" type="text"/>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }

export default AddPostForm;