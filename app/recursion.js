exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) 
  {
  	if(n <= 1)
  	{
  		return 1;
  	}
  	
  	return fibonacci(n - 1) + fibonacci(n -2);
  },

  validParentheses: function(n) {

  }
};
