import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  tab: {},
  tabs: {},
  tabPanels: {},
};

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  selectedTabIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  renderTabs = () => {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index;
      const isDisabled = this.props.disabled.indexOf(index) !== -1;
      return (
        <div
          key={tab.label}
          style={
            isDisabled
              ? styles.disabledTab
              : isActive
                ? styles.activeTab
                : styles.tab
          }
          onClick={isDisabled ? null : () => this.selectedTabIndex(index)}
        >
          {tab.label}
        </div>
      );
    });
  };

  renderPanels = () => {
    const tab = this.props.data[this.state.activeIndex];
    return <div>{tab.description}</div>;
  };

  render() {
    const tab = <div style={styles.tabs}>{this.renderTabs()}</div>;
    const panel = <div style={styles.tabPanels}>{this.renderPanels()}</div>;
    return <div>{this.props.tabsOnBottom ? [panel, tab] : [tabs, panel]}</div>;
  }
}

Tabs.proptypes = {
  data: PropTypes.array.isRequired,
};

export default Tabs;
