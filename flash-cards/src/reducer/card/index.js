const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });
      return state.concat([newCard]);
    default:
      return state;
  }
};
