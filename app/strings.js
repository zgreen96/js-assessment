exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount)
  {
  	var ans = "";
  	var count = 0;
  	var nonConseqCh = [];

  	for(var b = 0; b < str.length-1; b++)
  	{
  		if(count < amount)
  		{
  			ans = ans.concat(str.charAt(b))
  		}
  		if(str.charAt(b) === str.charAt(b+1))
  		{
  			count++;
  		}
  		else
  		{
  			count = 0;
  		}
  	}
  	if(str.charAt(str.length-1) !== str.charAt(str.length-2))
  	{
  		ans = ans.concat(str.charAt(str.length-1));
  	}
  	else
  	{
  		if(count < amount)
  		{
  			ans = ans.concat(str.charAt(str.length-1));
  		}
  	}

  	return ans;

  },

  wordWrap: function(str, cols) 
  {
  	var words = [];
  	var ans = "";

  	words = str.split(' ');
  	ans = ans.concat(words[0]);

  	for(var a = 1; a < words.length; a++)
  	{
  		if(words[a].length > cols)
  		{
  			ans = ans.concat("\n");
  			ans = ans.concat(words[a]);
  		}
  		else if(ans.length + words[a].length > cols)
  		{
  			ans = ans.concat("\n");
  			ans = ans.concat(words[a]);
  		}
  		else
  		{
  			ans = ans.concat(' ');
  			ans = ans.concat(words[a]);
  		}
  		
  	}
  	return ans;
  },

  reverseString: function(str) 
  {
  	var ans = "";
  	for(var a = str.length-1; a >= 0; a--)
  	{
  		ans = ans.concat(str.charAt(a));
  	}
  	return ans;
  }
};
