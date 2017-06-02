/*
Acadgild Front End Development Course, Assignment 4.4
Student:  Michele Cannito
Date: June 2, 2017
Topics: TypeScript, Using Generics and Constraining Generics
Assignment (quoted from Acadgild):

    "Create a generic class with property name, then
    ○ setName() with generic type
    ○ getName() with generic type
    Now create instances for that class with different-different types.
    Display message using console.
    ● Create generic constraint:
    interface IUser { }
    class User<T extends IUser> { }
    As we already discussed, It means that T has to implement IUser. In simple
    terms it will restrict the type of T to anything that implements IUser. The
    importance of this is that you cannot really pass any data -type, but you
    just have to pass something specific (in this case it’s going to be IUser).
    Define some property in interface and use them in class. Display output
    using console."
*/
// Notes:
/*
   "Generics are a way to create functions and classes that define a
   behavior that can be reused across many different types while retaining
   the full information about that type." (J. Chadwick, Essential Typescript)

   The syntax for defining is this: <genericName>. By convention, T is used.
   The generic replaces hardcoding a type. This means a function or class
   can be reused with different types.
*/
// Create a generic class with property name
var GenericNameClass = (function () {
    function GenericNameClass() {
    }
    // Create get and set methods with generic type
    GenericNameClass.prototype.getName = function () {
        return this.name;
    };
    GenericNameClass.prototype.setName = function (name) {
        this.name = name;
    };
    return GenericNameClass;
}());
// Create instances for that class with different-different types
var nameBoolean = new GenericNameClass();
nameBoolean.setName(true);
console.log(nameBoolean.getName()); // true
var nameString = new GenericNameClass();
nameString.setName("This generic class output is a string.");
console.log(nameString.getName());
var nameNumber = new GenericNameClass();
nameNumber.setName(42);
console.log(nameNumber.getName()); // 42
// Create class User<T extends IUser> { }
// Define some property in interface and use it in class. 
var User = (function () {
    function User(arg) {
        this.salary = arg; // in thousands. Output #k
    }
    User.prototype.printSalary = function () {
        return ("(Constraint output) Salary: $" + this.salary.userType + "k");
    };
    return User;
}());
// Display output using console.
var baseSalaryJrDev = new User({ userType: 57 });
console.log(baseSalaryJrDev.printSalary());
