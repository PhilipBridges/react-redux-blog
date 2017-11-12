import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Post extends Component {
  render() {
    const { name, data } = this.props.post
    return (
      <div className="list-item">
        {name}
        {data}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(Post);