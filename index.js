const helpers = [
  {
    name: 'equal',
    executable: (lvalue, rvalue, options) => {
      if (arguments.length < 3)
	throw new Error('Handlebars Helper equal needs 2 parameters');
      if (lvalue != rvalue) {
	return options.inverse(this);
      } else {
	return options.fn(this);
      }
    }
  },
  {
    name: 'containsvalue',
    executable: (collection = [], value) => {
      return collection.filter(item => value === item.value).length > 0;
    }
  }
];


const loadHelpers = handlebars => {
  helpers.map(item => handlebars.registerHelper(item.name, item.executable));
  return handlebars;
};

module.exports = loadHelpers;
