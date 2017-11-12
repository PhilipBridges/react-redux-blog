import uuid from 'uuid';
import database from '../firebase/firebase';

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const fireAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      data = ''
    } = postData;
    const post = { name, data }
    database.ref(`users/${uid}/posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }))
    });
  }
}

export const getPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
})

export const fireGetPosts = () => {
  return (dispatch, getState) => {
    const id = getState().auth.uid;
    return database.ref(`users/${id}/posts`)
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