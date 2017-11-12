import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Link } from 'react-router-dom'

export const PostList = (props) => (
  <div className="content-container">
    <div className="list-header">
      Posts
      </div>
    <div className="list-body">
      {props.posts.map((post) => {
        return (
          <Link className="list-item" key={post.id} to={`/posts/${post.id}`} {...post}>
              <p className="list-item__title">
                {post.name}
              </p>
              <p className="list-item__data">
                {post.data.substring(0, 128)}...
            </p>
          </Link>
        )
      })}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostList)