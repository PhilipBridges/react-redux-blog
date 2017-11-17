import React from 'react';
import { connect } from 'react-redux';
import AddPostForm from './AddPostForm';
import { fireAddPost } from '../actions/posts';

export class AddPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.fireAddPost(post);
    this.props.history.push('/');
  };
  user = this.props.user
  isAuthed = this.props.isAuthed
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Post</h1>
          </div>
        </div>
        <div className="content-container">
          <AddPostForm
            onSubmit={this.onSubmit}
            user={this.user}
            isAuthed={this.isAuthed}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profile,
  isAuthed: state.auth.uid && state.auth.uid.length > 1
});

const mapDispatchToProps = (dispatch) => ({
  fireAddPost: (post) => dispatch(fireAddPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);