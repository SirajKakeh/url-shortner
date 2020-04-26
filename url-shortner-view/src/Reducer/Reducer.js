const reducer = function (state = '', action) {
  switch (action.type) {
    case 'short_url':
      console.log('hello');
    default:
      return state;
  }
};
export default reducer;