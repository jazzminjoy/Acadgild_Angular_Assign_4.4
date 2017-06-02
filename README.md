# Acadgild_Angular_Assign_4.4
Using Generics and Constraining Generics

Acadgild Front End Development Course, Assignment 4.4
Student:  Michele Cannito
Date: June 2, 2017
Topics: TypeScript, Using Generics and Constraining Generics
To run: node generic.js
Note to Acadgild Reviewer: Just look at the .ts file. The .js file was generated by transpiling the .ts one. Run the .js file.
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

Notes:

   "Generics are a way to create functions and classes that define a
   behavior that can be reused across many different types while retaining
   the full information about that type." (J. Chadwick, Essential Typescript)

   The syntax for defining is this: <genericName>. By convention, T is used.
   The generic replaces hardcoding a type. This means a function or class
   can be reused with different types.