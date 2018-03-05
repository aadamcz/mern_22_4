import { ADD_POST, ADD_POSTS, DELETE_POST, EDIT_POST, THUMB_UP, THUMB_DOWN } from './PostActions';
// Get all posts
export const getPosts = state => state.posts.data;
// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];



// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data]
      };
    case ADD_POSTS :
      return {
        data: action.posts
      };
    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid)
      };
    case EDIT_POST:
      return {
        data: state.data.map(post => post.cuid === action.cuid ? Object.assign({}, post, action.post): post)
      };  
    case THUMB_UP :
      return {  
        data: state.data.map(function(post) {
          if (post.cuid === action.cuid) {
            return {...post, votes: post.votes + 1};          
          };
        }
      )};  
    case THUMB_DOWN :
      return {  
        data: state.data.map(function(post) {
          if (post.cuid === action.cuid) {
            return {...post, votes: post.votes - 1};          
          };
        }
      )};
    default:
      return state;
  }
};
// Export Reducer
export default PostReducer;