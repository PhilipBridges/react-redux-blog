import uuid from 'uuid';
import database from '../firebase/firebase';

// Posts
export const getPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
})

export const fireGetPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts`)
      .once('value')
      .then((snapshot) => {
        const posts = []

        snapshot.forEach((childSnapshot) => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
          dispatch(getPosts(posts))
        })
      })
  }
}

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const fireAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      data = ''
    } = postData;
    const post = { title, data }
    database.ref(`users/${uid}/posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }))
    });
  }
}