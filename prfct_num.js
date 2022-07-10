// Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

// Now, You are given an integer 
// N
// , write a program to check whether the given number is a Perfect Number or not.

// Note: You have to complete Perfect _Check function. No need to take any input.

// Input Format

 
var Perfect_Check = (N) => 
{
   let count = 0; 
   for(let i = 1;i<=N/2;i++){
    if(N%i===0){
        count +=i;
    }
   }  
   if(count===N&&count!==0){
    console.log("YES");
}else{

    console.log("NO");
}
        
};

Perfect_Check(6);

