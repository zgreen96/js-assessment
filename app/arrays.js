exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item)
  {
      for(var a = 0; a < arr.length; a++)
      {
        if(arr[a] === item)
        {
          return a;
        }
      }
      return -1;
  },

  sum: function(arr)
  {
      var sum = 0;

      for(var a = 0; a < arr.length; a++)
      {
        sum += arr[a];
      }
      return sum;
  },

  remove: function(arr, item) 
  {
    var ans = [];

    for(var a = 0; a < arr.length; a++)
    {
      if(arr[a] !== item)
      {
        ans.push(arr[a]);
      }
    }
    return ans; 

  },

  removeWithoutCopy: function(arr, item) 
  {
      for(var a = 0; a < arr.length; a++)
      {
        if(arr[a] === item)
        {
          arr.splice(a, 1);
          a--;
        }
      }

      return arr;
  },

  append: function(arr, item)
   {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) 
  {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) 
  {
    arr.unshift(item);
    return arr; 
  },

  curtail: function(arr) //opposite of pop? 
  {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var cat = arr1.concat(arr2);
    return cat;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) 
  {
    var c = 0;
    for(var a = 0; a < arr.length; a ++)
    {
      if(arr[a] === item)
      {
        c++;
      }
    }
    return c;
  },

  duplicates: function(arr) 
  {
    var dup = [];
    for(var a = 0; a < arr.length; a++)
    {
      for(var b = a + 1; b < arr.length; b ++)
      {
        if((arr[a] === arr[b]) && !(dup.includes(arr[a])))
        {
          dup.push(arr[a]);
        }
      }
    }

    return dup;

  },

  square: function(arr) 
  {
    for(var a = 0; a < arr.length; a++)
    {
      arr[a] *= arr[a];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) 
  {
    var occurAt = [];
    for(var a = 0; a < arr.length; a++)
    {
      if(arr[a] === target)
      {
        occurAt.push(a);
      }
    }
    return occurAt;
  }
};
