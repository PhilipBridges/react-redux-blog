import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Link } from 'react-router-dom'
import { fireGetPosts } from '../actions/posts';

export class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts
    }
  }
  shouldComponentUpdate() {
    return true
  }
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          Posts
        </div>
        <div className="list-body">
          {this.props.posts.map((post) => (
            <Link className="list-item" key={post.id} to={`/posts/${post.id}`} {...post}>
              <h3 className="list-item__title">
                {post.title}
              </h3>
              <p className="list-item__data">
                {post.data.substring(0, 512)}...
              </p>
            </Link>
          )
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  fireGetPosts: () => dispatch(fireGetPosts())
})

export default connect(mapStateToProps)(PostList)