/**
*
* An easy and efficient way
* to check any method inside
* an object.
*
**/

// System Imports
var ratify = require('node-ratify');


// Global options
var globalOptions = {
	'deep'        : false,
	'ignoreCase'  : false
};

//
// It takes three arguments :
// obj : which needs to be checked
// methodName : name of the method(optional)
// options : options object(optional)
//
function hasMethod (obj, methodName, options) {
		
	if (!ratify.isStrictObject(obj))
		throw new TypeError('Invalid argument : ' + obj + ' is not an object');

	if ((arguments.length === 2) && 
		(typeof arguments[1] === 'object')) {

		options = arguments[1];
		methodName = null;
	}

	if ((arguments.length > 2) &&
		(typeof arguments[1] !== 'string' || typeof arguments[2] !== 'object'))
		throw new TypeError('Invalid arguments to method');

	if (!options || 
		(Object.getOwnPropertyNames(options).length < 1)) {
		options = globalOptions;
	}

	var deep       = options['deep'],
	    ignoreCase = options['ignoreCase']
		   method  = methodName;

	var hasKey = function (x) {
		var result = false;
		var keys = Object.getOwnPropertyNames(x);
		
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var val = x[key];
			
			result = (result || (
							(	deep && ratify.isStrictObject(val)) 
								? 
								hasKey(val) 
								: 
								(
									ratify.isFunction(val)
									? 
									(!ratify.isEmpty(method)) 
										? (ignoreCase ? 
											((method.toLowerCase() === key.toLowerCase()) ? true : false) : 
											((method === key) ? true : false)) 
										: true
									: 
									false
								)
							)
					);

			if (result)
				return true;
		}

		return result;
	};

	return hasKey(obj);

}

exports = module.exports = {
	hasMethod : hasMethod
};