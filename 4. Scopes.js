/*04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting. */

{
    console.log(a);
    console.log(b);
    console.log(c);

    var  a =10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);

}