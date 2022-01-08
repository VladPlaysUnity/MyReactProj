const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let intialState = {
  posts:[
  {id:1, message:"Hi, how are you?"},
  {id:2, message:"Fine, what about you?"},
  ],
  newPostText: ''
};

const profilePageReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost = {id:3, message: state.newPostText};
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;