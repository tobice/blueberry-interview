/** Maintains the number of running background tasks (i. e. AJAX calls) */
export default (state = 0, action) => {
  if (action.type.match(/START/)) {
    return state + 1;
  }
  if (action.type.match(/SUCCESS/) || action.type.match(/ERROR/)) {
    return state - 1;
  }

  return state;
}
