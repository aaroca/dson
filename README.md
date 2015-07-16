# dson
Read json files allowing comments on it

```
{
	/**
	 * Name of the person
	 */
	"name": "alvaro",
	/**
	 * Age of the person
	 */
	"age": 28,
	/**
	 * Pets of the person
	 */
	"pet": {
		/** Pet name */
		"name": "batman",
		/** Pet age */
		"age": 1
	}
}
```

# usage

Just add the npm packge (publishing in progress...)

```
npm install --save dson
```

Add to your js file as usual and call the load method

```
var dson = require('dson');

var dummy = dson.load('./commentedDummy.json');
```

You will get on `dummy` var the content of the json file without comments.

```
{ name: 'alvaro', age: 28, pet: { name: 'batman', age: 1 } }
```
