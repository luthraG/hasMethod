var hm = require('./index.js');

(function test () {

	//
	// Category 1 : Null/Undefined Tests  --- Here error should be there
	//
	// console.log(hm.hasMethod(null));
	// console.log(hm.hasMethod(undefined));
	// console.log(hm.hasMethod());
	// console.log(hm.hasMethod(''));
	// console.log(hm.hasMethod(new String('Hello')));
	// console.log(hm.hasMethod(new Number(7)));

	//
	// Category 2 : Simple one level or empty objects  --- Here false/true(true if any method is present at top level) should be returned
	//
	var x = {'a' : '2', 'b' : '3', 'c' : 7}; // No method present
	var y = {}; // Empty object
	var z = new Object(); // Empty Object
	var object1 = {'a' : 1, dummy : function() {}}; // one method with name dummy present
	var object2 = {'m' : 3, dummy1 : function() {}, dumm2 : function() {}, 'k' : 'Hello'}; // Two methods present
	// In below example,  it should return false, since deep is false, even though method is present
	var object3 = {'m' : 1, 'k' : {dummy7 : function() {}}};
	
	console.log(hm.hasMethod(x) === false);
	console.log(hm.hasMethod(y) === false);
	console.log(hm.hasMethod(z) === false);
	console.log(hm.hasMethod(object1) === true);
	console.log(hm.hasMethod(object2) === true);
	console.log(hm.hasMethod(object3) === false);

	//
	// Category 3 : Nested objects  --- Here false/true(true if any method is present at any level) should be returned
	//
	var object1 = {'m' : 1, 'k' : {dummy7 : function() {}}};
	var object2 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', method1 : function(){}}, method1 : function() {}}; // Same method at top level as well second level
	var object3 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', method1 : function(){}}}; // Only one method and that too at second level
	var object4 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', 'e' : {'k' : 32793156, method1 : function(){}}}}; // Only one method and that too at third level
	var object5 = {'a' : {'b' : 2341, 'e' : {'m' : {'qwerty' : 54321, 'l' : {method : function(){}}}}}}; // Two methods at fifth level
	var object6 = {'asdfghi' : 'mnopqrst', '567' : 'hkjhj', 'sgh' : {'jj' : 123}}; // No method but deep flag should set to true here

	console.log(hm.hasMethod(object1, {'deep' : true}) === true);
	console.log(hm.hasMethod(object1, {'deep' : false}) === false);
	console.log(hm.hasMethod(object2, {'deep' : true}) === true);
	console.log(hm.hasMethod(object3, {'deep' : true}) === true);
	console.log(hm.hasMethod(object4, {'deep' : true}) === true);
	console.log(hm.hasMethod(object5, {'deep' : true}) === true);
	console.log(hm.hasMethod(object6, {'deep' : true}) === false);

	//
	// Category 4 : Search 'category 2 cases' with method name
	//
	var object1 = {'a' : 1, dummy : function() {}}; // one method with name dummy present
	var object2 = {'m' : 3, dummy1 : function() {}, dumm2 : function() {}, 'k' : 'Hello'}; // Two methods present
	// In below example,  it should return false, since deep is false, even though method is present
	var object3 = {'m' : 1, 'k' : {dummy7 : function() {}}};
	
	console.log(hm.hasMethod(object1, 'dummy') === true);
	console.log(hm.hasMethod(object1, 'dummy1') === false);
	console.log(hm.hasMethod(object1, '') === true);
	console.log(hm.hasMethod(object1, null) === true);
	console.log(hm.hasMethod(object2, 'dummy1') === true);
	console.log(hm.hasMethod(object2, 'dumm2') === true);
	console.log(hm.hasMethod(object2, 'dummy2') === false);
	console.log(hm.hasMethod(object2, 'dummy6') === false);
	console.log(hm.hasMethod(object3, 'dummy7') === false);
	console.log(hm.hasMethod(object3, 'dummy7', {'deep' : false}) === false);

	//
	// Category 5 : Search 'category 3 cases' with method name
	//
	var object1 = {'m' : 1, 'k' : {dummy7 : function() {}}};
	var object2 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', method1 : function(){}}, method1 : function() {}}; // Same method at top level as well second level
	var object3 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', method1 : function(){}}}; // Only one method and that too at second level
	var object4 = {'a' : 123, 'b' : 'Hello World', 'c' : {'d' : 'new', 'e' : {'k' : 32793156, method1 : function(){}}}}; // Only one method and that too at third level
	var object5 = {'a' : {'b' : 2341, 'e' : {'m' : {'qwerty' : 54321, 'l' : {method : function(){}}}}}}; // Two methods at fifth level
	var object6 = {'asdfghi' : 'mnopqrst', '567' : 'hkjhj', 'sgh' : {'jj' : 123}}; // No method but deep flag should set to true here

	console.log(hm.hasMethod(object1, 'dummy7', {'deep' : true}) === true);
	console.log(hm.hasMethod(object1, 'dummy', {'deep' : true}) === false);
	console.log(hm.hasMethod(object1, 'dummy7', {'deep' : false}) === false);
	console.log(hm.hasMethod(object2, 'method1', {'deep' : true}) === true);
	console.log(hm.hasMethod(object3, 'method1', {'deep' : true}) === true);
	console.log(hm.hasMethod(object3, '', {'deep' : true}) === true);
	console.log(hm.hasMethod(object3, ' ', {'deep' : true}) === false);
	console.log(hm.hasMethod(object4, 'method1', {'deep' : true}) === true);
	console.log(hm.hasMethod(object5, 'METHOD', {'deep' : true, ignoreCase : true}) === true); // Case insensitive search
	console.log(hm.hasMethod(object6, 'method', {'deep' : true}) === false);

})();