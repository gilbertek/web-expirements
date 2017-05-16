import React from 'React';
import Sidebar from './Sidebar/Sidebar';

const App = () =>
  <div className='container'>
    <div className='row'>
      <Sidebar decks={[ {name: 'Deck 1'} ]} addingDeck={false} />
    </div>
  </div>

export default App;
