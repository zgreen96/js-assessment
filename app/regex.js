exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) 
  {
    for(var a = 0; a < str.length; a++)
    {
      if(str.charCodeAt(a) >= 48 && str.charCodeAt(a) <= 57)
      {
        return true;
      }
    }
    return false;
  },

  containsRepeatingLetter: function(str)
  {
    for(var a = 0; a < str.length; a++)
    {
      for(var b = a + 1; b < str.length; b++)
      {
        if((str.charAt(a) === str.charAt(b)) && (str.charCodeAt(a) <= 48 || str.charCodeAt(a) >= 57))
        {
          return true;
        }
      }
    } 
    return false;
  },

  endsWithVowel: function(str) 
  {
    var end = str.charAt(str.length-1);
    console.log()
    if(end === 'a' || end === 'e' || end === 'i' || end === 'o' || end === 'u')
    {
      return true;
    }
    if(end === 'A' || end === 'E' || end === 'I' || end === 'O' || end === 'U')
    {
      return true;
    }
    return false;

  },

  captureThreeNumbers: function(str) 
  {
    var ans = "";
    for(var a = 0; a < str.length; a++)
    {
      if(str.charCodeAt(a) >= 48 && str.charCodeAt(a) <= 57 &&
         str.charCodeAt(a+1) >= 48 && str.charCodeAt(a+1) <= 57 &&
         str.charCodeAt(a+2) >= 48 && str.charCodeAt(a+2) <= 57)
      {
        ans = ans.concat(str.charAt(a) + str.charAt(a+1) + str.charAt(a+2));
        return ans;
      }
    }
    return false;
  },

  matchesPattern: function(str) 
  {
    if(str.length === 12)
    {
      return (/\d{3}-\d{3}-\d{4}/).test(str);
    }
    return false;
  },

  isUSD: function(str)
  {
    return (/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/).test(str);
  }
};
