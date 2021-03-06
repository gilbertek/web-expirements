import React, { Component } from 'React';
import { connect } from 'react-redux';
import {
  showAddDeck,
  hideAddDeck
} from '../../reducer/sidebar';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.createDeck = this.createDeck.bind(this);
  }

  componentDidUpdate() {
    const elt = ReactDOM.findDOMNode(this.ref.add);
    if (elt) elt.focus();
  }

  createDeck(evt) {
    if (evt.which !== 13) return;

    const name = ReactDOM.findDomNode(this.add);
    this.props.addDeck(name);
    this.props.hideDeck();
  }


  render() {
    const props = this.props;

    return (
      <div className='sidebar'>
        <h2>All Decks</h2>

        {props.decks.map((deck, i) =>
          <li key={i}>{deck.name}</li>
        )}

        { props.addingDeck &&
          <input ref={add => this.add = add} onKeyPress={this.createDeck} /> }
      </div>
    );
  }
}

export default connect()(Sidebar);
