import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpandableForm from './ExpandableForm';

class Profile extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    model: {
      id: 0,
    },
    title: 'Your name',
  };

  state = {
    expanded: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.model.save();
  };

  handleNameChange = e => {
    this.props.model.changeName(e.target.value);
  };

  handleExpand = e => {
    e.preventDefault();
    this.setState(prevState => {
      expanded: !prevState.expanded;
    });
  };

  render() {
    const { model, title } = this.props;

    return (
      <ExpandableForm
        onSubmit={this.handleSubmit}
        expanded={this.state.expanded}
        onExpand={this.handleExpand}
      >
        <div>
          <h1>{title}</h1>
          <input
            type="text"
            value={model.name}
            onChange={this.handleNameChange}
            placeHolder="Your name"
          />
        </div>
      </ExpandableForm>
    );
  }
}

export default Profile;
