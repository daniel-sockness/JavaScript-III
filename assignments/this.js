/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding - When a function containing "this" is invoked globally, "this" will refer to the global "window" object or will be undefined in "use strict" mode.
* 2. Implicit Binding - When a function is a method of some object, "this" will refer to that object when the function is invoked as a method.
* 3. NEW Object Binding - When a constructor function is created and "this" is used in the body of the constructor function, "this" will refer to any object that is newly created from the constructor class.
* 4. Explicit Binding - When an object is bound to a function using exampleFunction.bind(Object) and that function is called e.g. boundFunction(), "this" will refer to the specified "Object" passed to the bind method.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function defaultBindingFunction() {
  console.log(`Default Binding: \"this\" refers to => \"${this.__proto__.constructor.name}\" Object`);
}

defaultBindingFunction();

// Principle 2
// code example for Implicit Binding
function implicitBindingFunction() {
  console.log(`Implicit Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const implicitObject = {
  "name": "implicitObject",
  "implicit_object_method": implicitBindingFunction
}

implicitObject.implicit_object_method();

// Principle 3
// code example for New Binding
function NewBindingConstructor(name) {
  this.name = name;
  console.log(`NEW Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const imANewObject = new NewBindingConstructor("imANewObject");

// Principle 4
// code example for Explicit Binding
function explicitBindingFunction() {
  console.log(`Explicit Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const specifiedObject = {
  "name": "specifiedObject"
}

const boundFunction = explicitBindingFunction.bind(specifiedObject); // Can use call or apply also
boundFunction();
