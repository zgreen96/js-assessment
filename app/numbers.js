exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) //not sure what this is asking me to do
  {

  },

  base10: function(str) 
  {
  	var ans = 0;
  	var power = str.length -1;
  	for(var a = 0; a < str.length; a++)
  	{
  		if(str.charAt(a) === '1')
  		{
  			ans += Math.pow(2, power);
  		}
  		power--;
  	}
  	return ans;

  },

  convertToBinary: function(num) 
  {
 	ans = "";
 	for(var a = 7; a >= 0; a--)
 	{
 		if(num - Math.pow(2, a) >= 0)
 		{
 			ans = ans.concat('1');
 			num -= Math.pow(2, a); 
 		}
 		else
 		{
 			ans = ans.concat('0');
 		}
 	}
 	return ans;
  },

  multiply: function(a, b) 
  {
  	var ans = ((a * 10) * (b * 10))/100;
  	return ans;
  }
};
