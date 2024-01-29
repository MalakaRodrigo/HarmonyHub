import {
   uplaodVideoFeed
  } from '../routines';
  
  const initialState = {
    videofeedArray: []
  };
  

  
  const videoReducer = (state = initialState, action) => {
    switch (action.type) {
      case uplaodVideoFeed.TRIGGER:
        return {}
      case uplaodVideoFeed.SUCCESS:
        return {
          ...state,
          videofeedArray: [action]
        }
      default:
        return state;
    }
  };
  
  export default videoReducer;
  