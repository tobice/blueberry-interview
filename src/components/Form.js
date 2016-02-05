import React  from 'react'
import Configurator from './Configurator';

export default ({constraints, updateForm, values}) => {
  return (<div>
    <Configurator
      {...constraints.termInterval}
      title="Term"
      selectValue={term => updateForm({term})}
      value={values.term} />
    <Configurator
      {...constraints.amountInterval}
      title="Amount"
      selectValue={amount => updateForm({amount})}
      value={values.amount} />
  </div>);
}
