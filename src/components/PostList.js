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
              <h3 className="list-item__title">
                {post.title}
              </h3>
              <p className="list-item__data">
                {post.data.substring(0, 512)}...
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