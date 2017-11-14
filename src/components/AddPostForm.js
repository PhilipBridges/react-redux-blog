import React, { Component } from 'react';

export class AddPostForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      data: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    const title = this.state.title
    const data = this.state.data

    this.props.onSubmit({
      title,
      data
    })
  }
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({title}))
  }
  onDataChange = (e) => {
    const data = e.target.value
    this.setState(() => ({data}))
  }
    render(){
      return (
        <div>
          <form className="form" onSubmit={this.onSubmit}>
            <input className="text-input" onChange={this.onTitleChange} value={this.state.title} placeholder="title" type="text"/>
            <textarea className="textarea" onChange={this.onDataChange} value={this.state.data} placeholder="data"></textarea>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }

export default AddPostForm;