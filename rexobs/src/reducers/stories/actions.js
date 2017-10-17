export const LOAD_STORIES = 'LOAD_STORIES';
export const CLEAR_STORIES = 'CLEAR_STORIES';

export const loadStories = () => {
  console.log('Load Stories::payload>>');
  return {
    type: LOAD_STORIES
  };
};

export const clearStories = () => {
  console.log('clearStories>>');
  return {
    type: CLEAR_STORIES
  };
};
