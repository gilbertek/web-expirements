import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  LOAD_STORIES,
  loadStories,
  clearStories,
} from '../reducers/stories/actions';

const Story = ({ title }) => {
  return <p>{title}</p>;
};

Story.propTypes = {
  title: PropTypes.string,
};

const StoryList = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Story {...item} />
        </li>
      ))}
    </ul>
  );
};

StoryList.propTypes = {
  items: PropTypes.array.isRequired,
};

export const Stories = props => {
  return (
    <div>
      <button type="button" onClick={props.loadStories}>
        Load top 3 Stories
      </button>

      <button type="button" onClick={props.clearStories}>
        Clear
      </button>
      <StoryList {...props} />
    </div>
  );
};

Stories.propTypes = {
  children: PropTypes.node,
  clearStories: PropTypes.func,
  loadStories: PropTypes.func,
};

const mapStateToProps = state => {
  return state.stories;
};

const mapDispatchToProps = dispatch => {
  return {
    loadStories: () => dispatch(loadStories()),
    clearStories: () => dispatch(clearStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
