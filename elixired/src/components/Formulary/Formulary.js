import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchApiError from '../Shared/FetchApiError';
import Tabs from './tabs';

const FormularyResponseHeaderComponent = ({ plan_name }) =>
  <h3>
    Formulary Response for {plan_name}
  </h3>;

FormularyResponseHeaderComponent.propTypes = {
  plan_name: PropTypes.string.isRequired
};

const FormularyInstructionComponent = () => {
  <p>Lorem</p>;
};

FormularyInstructionComponent.propTypes = {};

class Formulary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      formulary: {},
      isLoading: false,
      drugName: ''
    };
  }

  componentWillMount() {
    const { drugName } = this.state;
    this.props.fetchFormularyDrug(drugName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.drugName !== nextProps.drugName) {
      this.setState({
        formulary: nextProps.formulary
      });
    }
  }

  render() {
    const { fetched, formulary, errorMessage } = this.props;
    const { payers } = formulary;

    if (errorMessage) {
      return (
        <div className="wrapper">
          <FetchApiError message={errorMessage} />
        </div>
      );
    }

    if (fetched && payers.length > 0) {
      return <Tabs tabList={payers} activeTabIndex={0} />;
    } else {
      return <p>Loading....</p>;
    }
  }
}

Formulary.defaultProps = {
  drugName: '',
  isLoading: false,
  formulary: {},
  errorMessage: ''
};

Formulary.propTypes = {
  fetched: PropTypes.bool,
  children: PropTypes.node,
  fetchFormularyDrug: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  drugName: PropTypes.string.isRequired,
  formulary: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired
};
export default Formulary;
