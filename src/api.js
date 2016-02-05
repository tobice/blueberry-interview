import rest from './misc/rest'

export async function getConstraints() {
  return await rest('constraints');
}

export async function getFirstLoanOffer(amount, term) {
  return await rest('first-loan-offer?amount=' + amount + '&term=' + term);
}
