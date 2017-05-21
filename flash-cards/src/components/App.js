import React from 'React';
import Sidebar from './Sidebar/Sidebar';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
  <div className='container'>
    <div className='row'>
      <Sidebar decks={[ {name: 'Deck 1'} ]} addingDeck={false} />
    </div>
  </div>

export default App;
