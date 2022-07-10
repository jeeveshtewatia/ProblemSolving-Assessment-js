// Reverse a Number.
// Write a program which takes a numebr 
// N
//  as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.


var Reverse_Number = (N) => 
{
  let rev = 0;
  while (N !==0){
    let rem = N%10;
    rev = rev*10+rem;
    N = (N/10);
  }
  console.log(rev);
};
Reverse_Number(1900);
