import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Post extends Component {
  render() {
    const { title, data } = this.props.post
    return (
      <div className="content-container">
        <div className="list-header">
      </div>
        <div className="list-body">
          <div>
            <h3 className="list-item__title">
              {title}
            </h3>
            <p className="list-item__data">
              {data}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(Post);