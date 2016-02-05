import React  from 'react'

export default ({totalPrincipal, term, totalCostOfCredit, totalRepayableAmount, monthlyPayment}) => (
  <div>
    <ul>
      <li>Totap Principal: <strong>{totalPrincipal}</strong></li>
      <li>Term:  <strong>{term}</strong></li>
      <li>Total Cost Of Credit:  <strong>{totalCostOfCredit}</strong></li>
      <li>Total Repayble Amount:  <strong>{totalRepayableAmount}</strong></li>
      <li>Monthly Payment:  <strong>{monthlyPayment}</strong></li>
    </ul>
  </div>
);
