import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import Trades from '../../components/Trades/Trades';

class Transactions extends Component {
  render() {
    return (
      <div>
        <Form />
        <Trades />
      </div>
    );
  }
}

export default Transactions;