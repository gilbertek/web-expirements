import { LOAD_STORIES, CLEAR_STORIES } from './actions';

const stories = [
  {
    by: 'Random',
    id: 1345,
    title: 'To Protect voting',
    url: 'http://go.com',
  },
];

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  console.log('YES::Action>>', action);
  console.log('YES::State>>', state);
  switch (action.type) {
    case LOAD_STORIES:
      console.log('LOAD_STORIES::action>>', action);
      console.log('LOAD_STORIES::state>>', state);
      return {
        ...state,
        items: stories.slice(),
      };
    case CLEAR_STORIES:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
