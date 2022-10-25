//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
// let a = parseFloat(prompt("Enter A: "));
// let b = parseFloat(prompt("Enter B: "));
// let dividing = a / b;
// console.log(dividing);

//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
// let a = parseFloat(prompt("Enter A: "));
// let b = parseFloat(prompt("Enter B: "));
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
// let a = parseFloat(prompt("Enter A: "));
// let b = parseFloat(prompt("Enter B: "));
// let c = parseFloat(prompt("Enter C: "));
// if(a==0 || b==0 || c==0){
// console.log("numbers must be non-zero values.")
// }
// if(a!=0 && b!=0 && c!=0){
// let x=(c-b)/a;
// console.log(x);
// }

//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
// let a = parseFloat(prompt("Enter A: "));
// let b = parseFloat(prompt("Enter B: "));
// if (a>b){
//     let result=a+b;
//     console.log(result);
// }
// else if(a==b){
//     let result=a*b;
//     console.log(result);
// }
// else {
//      let result=a-b;
//     console.log(result);
// }

//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
// let a = parseFloat(prompt("Enter A: "));
// let b = parseFloat(prompt("Enter B: "));
// let c = parseFloat(prompt("Enter C: "));
// let discriminant = b * b - 4 * a * c;
// let root1;
// let root2;
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`The roots are ${root1} and ${root2}`);
// }
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`The root is ${root1}`);
// }
// else {
//     console.log(`The roots are real`);
// }

//6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".


// 7.User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)    
let x,y,r;
