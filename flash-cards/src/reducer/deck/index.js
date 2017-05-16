const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = Object.assign({}, action.data, {
        id: +new Date(),
        data: { name: 'My Deck' }
      });
      return state.concat([newDeck]);
    default:
      return state;
  }
};
