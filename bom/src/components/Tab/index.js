import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  tab: {},
  tabs: {},
  tabPanels: {},
  disabledTab: {},
  activeTab: {},
};

const TabList = props => {
  const { activeIndex } = props;
  const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onActivate: () => {
        props.onActivateTab(index);
      },
    })
  );
  return <div style={styles.tabs}>{children}</div>;
};

const Tab = props => {
  const isDisabled = props.isDisabled;
  const isActive = props.isActive;
  const style = isDisabled
    ? styles.disabledTab
    : isActive
      ? styles.activeTab
      : styles.tab;

  return (
    <div onClick={isDisabled ? null : () => props.onActivate()} style={style}>
      {props.children}
    </div>
  );
};

const TabPanels = props => <div style={styles.tabPanel}>{props.children}</div>;

const TabPanel = props => <div>{props.children}</div>;

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
        });
      } else if (child.type === TabList) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
          onActivateTab: activeIndex => {
            this.setState({ activeIndex });
          },
        });
      }
      return child;
    });
    return <div>{children}</div>;
  }
}
export { Tabs, Tab, TabList, TabPanels, TabPanel };
