exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) 
  {
  	return new Promise(function(resolve, reject)
  	{
  		setTimeout(function()
  		{
  			resolve(value), 1
  		});
  	})
  },

  manipulateRemoteData: function(url) 
  {
  	return new Promise(function(resolve, reject)
  	{
  		var req = new XMLHttpRequest();
  		req.open('GET',url);

		req.onload = function()
		{  		
	  		if(req.status == 200)
	  			resolve(req.response);
	  		else
	  			reject(Error(req.statusText));
	  	}

	  	req.send();

  	}).then(function(response)
  		{
  			var data = JSON.parse(response).people;
  			return data.map(key => key.name).sort();

  		});
  }
};
