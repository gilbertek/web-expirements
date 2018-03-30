import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClickHandlerFunc }) => (
  <button onClick={onClickHandlerFunc}>{title}</button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClickHandlerFunc: PropTypes.func.isRequired,
};

const renderDisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

renderDisplayList.propTypes = {
  list: PropTypes.array,
};

// 1st Implementation
// const withFilteredProps = BaseComponent => ({ list, side }) => {
//   const filteredList = list.filter(char => char.side === side);
//   return <BaseComponent list={filteredList} />;
// };
// const FilteredList = withFilteredProps(renderDisplayList);

// 2nd Itiration
const withTransformProps = transformFunc => {
  const ConfiguredComponent = BaseComponent => {
    return baseProps => {
      const transformedProps = transformFunc(baseProps);
      return <BaseComponent {...transformedProps} />;
    };
  };

  return ConfiguredComponent;
};

const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(char => char.side === side),
}))(renderDisplayList);

export default FilteredList;
