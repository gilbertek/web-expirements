import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: this.props.activeTabIndex || 0,
      tabList: []
    };
  }

  onClickHandler = (index) => {
    this.setState({
      activeTabIndex: index
    });
  }

  renderActiveTabContent = () => {
    const { tabList } = this.props;
    const { activeTabIndex } = this.state;

    if (tabList[activeTabIndex]) {
      return (
        <TabPanel
          tabIndex={activeTabIndex}
          className='selected'
          {...tabList[activeTabIndex]} />
      );
    }
  }

  render() {
    return (
      <div className='tabs'>
        <ul
          className='tab__label'
          role='tablist'>
          {
            this.props.tabList.map((child, index) =>
              <Tab
                key={index}
                tabIndex={index}
                onClick={this.onClickHandler}
                isActive={index === this.state.activeTabIndex}
                className='formulary'
                {...child} />
            )
          }
        </ul>

        <div className='tab__panel'>
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  tabList:        PropTypes.array.isRequired
};

export default Tabs;
