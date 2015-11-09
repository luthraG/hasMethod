# hasMethod
An easy and efficient way to look for a method inside an object.


### Installation

	'npm install hasMethod'

### Server-side usage

```javascript
var methodCheck = require('hasMethod');

var object = { 
				'a' : 123, 
				'b' : 'Hello World', 
				'c' : {
						'd' : 'new word', 
						'e' : {
								'k' : 32793156, 
								method1 : function(){
									console.log('Test Method');
								}
							  }
					   }
			  };

methodCheck.hasMethod(methodCheck, {deep : true}); // returns true
```

### Clone the repo

git clone https://github.com/luthraG/hasMethod.git

### API

#### hasMethod(obj, [methodName], [options])

API to check if object has specified method present or any method present
if methodName is specified. It takes following arguments : 
1. obj(mandatory) : Object into which we need to find the method.
2. methodName(optional) : Method to searched inside the object. If no method
is specified then this API check if the given object has 'any' method.
3. options(optional) : An optional options object to specify various options.


**Options**

Various options supported by this API are :
- **deep** - To specify if deep search needs to be performed. Default is 'false'.
- **ignoreCase** - To specify if case insensitive search needs to be performed. 
Default is 'false'.

**Example**

```javascript
var methodCheck = require('hasMethod');

var object = { 
				'a' : 123456789, 
				'b' : 'Hello World', 
				'c' : {
						'd'  : 'hello again', 
						test : function(){}
					   }
			  };

methodCheck.hasMethod(methodCheck, 'test', {deep : true}); // returns true
```

### License(MIT)

Copyright (c) 2015 Gaurav Luthra(luthra.zenith@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.