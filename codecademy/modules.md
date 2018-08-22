~~~~~ INTERMEDIATE JAVASCRIPT MODULES ~~~~~

1. Hello Modules
modules are reusuable pieces of code that can be exported from one program and imported for use in another program
> find, fix, debug code
> reuse and recycle code
> keep information private and protected from other modules
> prevent pollution of the global namespace and potential naming collisions

2. module.exports
    let Menu = {}; //define the variable
    Menu.specialty = "Roasted Beet Burger with Mint Sauce"; //Add data to the variable
    module.exports = Menu; //export it

3. require()
require() is a Javascript function that enables a module to load by passing in the module's filepath
as a parameter

    const Menu = require('./menu.js') //import module
    function placeOrder() {
      console.log('My order is: ' + Menu.specialty); //use the module and its properties
    }
    placeOrder();

4. module.export II
    //code to export a module
    let Menu = {};
    module.exports = {
      specialty: "Roasted Beet Burger with Mint Sauce",
      getSpecialty: function() {
        return this.specialty;
      }
    };
    //code to import and use the module above
    const Menu = require('./menu.js');
    console.log(Menu.getSpecialty());

5. export default
ES6: export default (instead of module.export) and named exports
    //export default uses the JS export statement to export JS Objects, functions, and primitive data types
    let Airplane = {};
    Airplane.availableAirplanes = [
      {name: 'AeroJet', fuelCapacity: 800},
      {name: 'SkyJet', fuelCapacity: 500}
    ];
    export default Airplane;

6. import
ES6: use import intead of require

    import Airplane from './airplane';
    const displayFuelCapacity = () => {
      Airplane.availableAirplanes.forEach((element) => {
        console.log('Fuel Capacity of ' + element.name +': ' + element.fuelCapacity);
      })
    }
    displayFuelCapacity();

7. Named Exports
To be used with multiple exports:

    let specialty = '';
    function isVegetarian() {};
    function isLowSodium() {}; //not exported
    export { specialty, isVegetarian };

8. Named Imports
    import { specialty, isVegetarian } from './menu';
    console.log(specialty);

9. Export Named Exports
the export keyword allows us to export objects upon declaration
    export let specialty = '';
    export function isVegetarian() {
    };

10. Import Named Imports (same as #8)
import { specialty, isVegetarian } from 'menu';

11. Export as
the 'as' keyword allows us to give a variable name an alias as demonstrated
    let specialty = '';
    let isVegetarian = function() {
    };
    let isLowSodium = function() {
    };
    export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

12. Import as
To import named export aliases with the as keyword, we add the aliased variable in our import statement.
    import { chefsSpecial, isVeg } from './menu';
    import {isLowSodium as saltFree} from 'Menu';

Another way of using aliases is to import the entire module as an alias:
    import * as Carte from './menu';
    Carte.chefsSpecial;
    Carte.isVeg();
    Carte.isLowSodium();

13. Combining Export Statements
We can also use named exports and default exports together.
    let specialty = '';
    function isVegetarian() {
    };
    function isLowSodium() {
    };
    function isGlutenFree() {
    };
    export { specialty as chefsSpecial, isVegetarian as isVeg };
    export default isGlutenFree;

This would also work if we exported most of the variables as declared and exported others with the export default syntax.
    export let Menu = {};
    export let specialty = '';
    export let isVegetarian = function() {
    };
    export let isLowSodium = function() {
    };
    let isGlutenFree = function() {
    };
    export default isGlutenFree;

14. Combining Import Statements
We can use an import keyword to import both types of variables as such:
    import { specialty, isVegetarian, isLowSodium } from './menu';
    import GlutenFree from './menu';

15. Review
module.exports_exports the module for use in another program.

require() imports the module for use in the current program.

ES6 introduced a more flexible, easier syntax to export modules:

default exports use export default to export JavaScript objects, functions, and primitive data types.

named exports use the export keyword to export data in variables.

named exports can be aliased with the as keyword.

import is a keyword that imports any object, function, or data type.

